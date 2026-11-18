// Contrato previo a producción de RES-HPI-01.
import { beforeEach, describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

const A = { id: "a", content: "Antecedente residual A" };
const B = { id: "b", content: "Antecedente residual B" };
const W0 = { id: "w0", content: "Trabajo retomado W0" };
const W1 = "Primer trabajo W1";

function seedPreviousMaterials() {
  localStorage.setItem("ordinary.materials", JSON.stringify([A, B]));
}

function seedResumedContext() {
  localStorage.setItem("ru2m1.previous", W0.content);
  localStorage.setItem("ordinary.materials", JSON.stringify([W0, A, B]));
}

async function createFirstWork(user: ReturnType<typeof userEvent.setup>) {
  await user.type(
    screen.getByRole("textbox", { name: /^introduce un texto libre$/i }),
    W1,
  );
  await user.click(screen.getByRole("button", { name: /^crear$/i }));
}

function aiWorkSelector() {
  const ai = screen.getByRole("region", { name: /^apoyo auxiliar de ia$/i });
  return within(ai).getByRole("combobox", { name: /^obra para apoyo ia$/i });
}

async function capture(
  user: ReturnType<typeof userEvent.setup>,
  text: string,
) {
  await user.click(
    screen.getByRole("button", { name: /^capturar aportación$/i }),
  );
  await user.type(screen.getByLabelText(/^aportación breve$/i), text);
  await user.click(screen.getByRole("button", { name: /^conservar$/i }));
}

function captureItem(text: string) {
  const item = screen.getByText(text).closest("li");
  if (item === null) {
    throw new Error("Captura no encontrada: " + text);
  }
  return item;
}

describe("R-RESHPI-01 — contrato rojo de primera creación y contexto común", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("[T-RESHPI-01] conserva el patrimonio de primera creación: W1 queda visible y recuperable", async () => {
    const user = userEvent.setup();
    render(<App />);

    await createFirstWork(user);

    expect(screen.getByText(/^lo que has aportado$/i)).toBeInTheDocument();
    expect(screen.getByText(W1)).toBeInTheDocument();
    expect(localStorage.getItem("ru2m1.previous")).toBe(W1);
  });

  it("[T-RESHPI-02] tras Crear W1, una superficie ordinaria reconoce inmediatamente W1 como trabajo actual común", async () => {
    const user = userEvent.setup();
    seedPreviousMaterials();
    render(<App />);

    await createFirstWork(user);

    const selector = aiWorkSelector();
    expect(
      within(selector).getByRole("option", { name: W1 }),
    ).toBeInTheDocument();
    expect(selector).toHaveDisplayValue(W1);
  });

  it("[T-RESHPI-03] una captura inmediata después de Crear W1 reconoce su pertenencia a W1", async () => {
    const user = userEvent.setup();
    seedPreviousMaterials();
    render(<App />);

    await createFirstWork(user);
    await capture(user, "Captura inmediata C1");

    expect(captureItem("Captura inmediata C1")).toHaveTextContent(W1);
  });

  it("[T-RESHPI-04] una comparación A/B inmediata después de Crear W1 conserva W1 como contexto", async () => {
    const user = userEvent.setup();
    seedPreviousMaterials();
    render(<App />);

    await createFirstWork(user);

    const comparison = screen.getByRole("region", {
      name: /^comparación de documentos$/i,
    });

    await user.selectOptions(
      within(comparison).getByRole("combobox", { name: /^documento a$/i }),
      A.id,
    );
    await user.selectOptions(
      within(comparison).getByRole("combobox", { name: /^documento b$/i }),
      B.id,
    );
    await user.click(
      within(comparison).getByRole("button", { name: /^comparar$/i }),
    );

    const active = within(comparison).getByRole("region", {
      name: /^comparación activa$/i,
    });

    expect(active).toHaveTextContent(W1);
    expect(
      within(active).getByRole("region", { name: /^documento a$/i }),
    ).toHaveTextContent(A.content);
    expect(
      within(active).getByRole("region", { name: /^documento b$/i }),
    ).toHaveTextContent(B.content);
  });

  it("[T-RESHPI-05] el apoyo IA adopta W1 inmediatamente sin una segunda selección humana", async () => {
    const user = userEvent.setup();
    seedPreviousMaterials();
    render(<App />);

    await createFirstWork(user);

    const selector = aiWorkSelector();
    expect(selector).toHaveDisplayValue(W1);

    const ai = screen.getByRole("region", { name: /^apoyo auxiliar de ia$/i });
    const request = within(ai).getByRole("textbox", {
      name: /^qué apoyo necesitas$/i,
    });
    const submit = within(ai).getByRole("button", {
      name: /^solicitar apoyo ia$/i,
    });

    await user.type(request, "Revisa W1.");
    expect(submit).toBeEnabled();
  });

  it("[T-RESHPI-06] el contexto común creado para W1 sobrevive unmount/remount sin reconstrucción manual", async () => {
    const user = userEvent.setup();
    seedPreviousMaterials();

    const execution = render(<App />);
    await createFirstWork(user);
    execution.unmount();

    render(<App />);

    expect(screen.getByLabelText(/^aportación anterior$/i)).toHaveTextContent(W1);

    const selector = aiWorkSelector();
    expect(selector).toHaveDisplayValue(W1);
  });

  it("[T-RESHPI-07] crear W1 deja W1 como current sin contaminar los materiales previos A/B", async () => {
    const user = userEvent.setup();
    seedPreviousMaterials();
    render(<App />);

    await createFirstWork(user);

    const comparison = screen.getByRole("region", {
      name: /^comparación de documentos$/i,
    });
    const first = within(comparison).getByRole("combobox", {
      name: /^documento a$/i,
    });
    const second = within(comparison).getByRole("combobox", {
      name: /^documento b$/i,
    });

    expect(
      within(first).getByRole("option", { name: A.content }),
    ).toBeInTheDocument();
    expect(
      within(second).getByRole("option", { name: B.content }),
    ).toBeInTheDocument();

    expect(aiWorkSelector()).toHaveDisplayValue(W1);
  });

  it("[T-RESHPI-08] la rama retomada conserva W0 como contexto común de captura, comparación e IA", async () => {
    const user = userEvent.setup();
    seedResumedContext();
    render(<App />);

    await capture(user, "Captura retomada C0");
    expect(captureItem("Captura retomada C0")).toHaveTextContent(W0.content);

    const comparison = screen.getByRole("region", {
      name: /^comparación de documentos$/i,
    });
    await user.selectOptions(
      within(comparison).getByRole("combobox", { name: /^documento a$/i }),
      A.id,
    );
    await user.selectOptions(
      within(comparison).getByRole("combobox", { name: /^documento b$/i }),
      B.id,
    );
    await user.click(
      within(comparison).getByRole("button", { name: /^comparar$/i }),
    );

    expect(
      within(comparison).getByRole("region", { name: /^comparación activa$/i }),
    ).toHaveTextContent(W0.content);

    expect(aiWorkSelector()).toHaveDisplayValue(W0.content);
  });
});
