import { beforeEach, describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

const W1 = { id: "w1", content: "Trabajo actual W1" };
const A = { id: "a", content: "Antecedente A" };
const B = { id: "b", content: "Antecedente B" };

function seedW1Context() {
  localStorage.setItem("ru2m1.previous", W1.content);
  localStorage.setItem("ordinary.materials", JSON.stringify([W1, A, B]));
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
    throw new Error(`No se encontró el elemento persistido de captura: ${text}`);
  }
  return item;
}

describe("R-HPI-01 — contrato observable de contexto operativo común", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("[T-HPI-01] permite establecer W1 desde la App ordinaria y conservarlo como trabajo disponible", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(
      screen.getByLabelText(/^introduce un texto libre$/i),
      W1.content,
    );
    await user.click(screen.getByRole("button", { name: /^crear$/i }));

    expect(localStorage.getItem("ru2m1.previous")).toBe(W1.content);
    expect(screen.getByText(/^lo que has aportado$/i)).toBeInTheDocument();
    expect(screen.getByText(W1.content)).toBeInTheDocument();
  });

  it("[T-HPI-02] conserva W1 tras desmontar y remontar la App sin reconstrucción manual", () => {
    seedW1Context();

    const firstExecution = render(<App />);
    firstExecution.unmount();

    render(<App />);

    expect(screen.getByLabelText(/^aportación anterior$/i)).toHaveTextContent(
      W1.content,
    );
    expect(
      screen.getByRole("button", { name: /continuar con este trabajo/i }),
    ).toBeInTheDocument();
  });

  it("[T-HPI-03] seleccionar un antecedente A no sustituye W1 como trabajo vigente", async () => {
    const user = userEvent.setup();
    seedW1Context();
    render(<App />);

    await user.type(
      screen.getByRole("textbox", {
        name: /^qué necesitas considerar ahora$/i,
      }),
      "Necesito consultar A sin abandonar W1.",
    );
    await user.click(
      screen.getByRole("button", {
        name: /^examinar materiales anteriores$/i,
      }),
    );
    await user.click(
      screen.getByRole("button", { name: /^usar este material 2$/i }),
    );

    expect(screen.getByLabelText(/^contenido seleccionado$/i)).toHaveTextContent(
      A.content,
    );
    expect(localStorage.getItem("ru2m1.previous")).toBe(W1.content);
  });

  it("[T-HPI-04] una captura realizada bajo W1 hace reconocible posteriormente su pertenencia a W1", async () => {
    const user = userEvent.setup();
    seedW1Context();

    const firstExecution = render(<App />);
    await capture(user, "Captura C1");

    expect(captureItem("Captura C1")).toHaveTextContent(W1.content);

    firstExecution.unmount();
    render(<App />);

    expect(captureItem("Captura C1")).toHaveTextContent(W1.content);
  });

  it("[T-HPI-05] una comparación A/B conserva de forma observable que se realiza bajo W1 y no cambia el trabajo", async () => {
    const user = userEvent.setup();
    seedW1Context();
    render(<App />);

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

    const activeComparison = within(comparison).getByRole("region", {
      name: /^comparación activa$/i,
    });

    expect(activeComparison).toHaveTextContent(W1.content);
    expect(localStorage.getItem("ru2m1.previous")).toBe(W1.content);

    await user.click(
      within(comparison).getByRole("button", {
        name: /^salir de comparación$/i,
      }),
    );

    expect(localStorage.getItem("ru2m1.previous")).toBe(W1.content);
  });

  it("[T-HPI-06] el apoyo IA usa W1 como contexto común sin exigir una segunda selección independiente", async () => {
    const user = userEvent.setup();
    seedW1Context();
    render(<App />);

    const ai = screen.getByRole("region", { name: /^apoyo auxiliar de ia$/i });
    const workSelector = within(ai).getByRole("combobox", {
      name: /^obra para apoyo ia$/i,
    });
    const request = within(ai).getByRole("textbox", {
      name: /^qué apoyo necesitas$/i,
    });
    const submit = within(ai).getByRole("button", {
      name: /^solicitar apoyo ia$/i,
    });

    expect(workSelector).toHaveValue(W1.id);

    await user.type(request, "Revisa una cuestión de W1.");

    expect(submit).toBeEnabled();
  });

  it("[T-HPI-07] un cambio explícito W1→W2 separa las asociaciones anteriores y posteriores", async () => {
    const user = userEvent.setup();
    seedW1Context();

    let execution = render(<App />);
    await capture(user, "Captura de W1");

    await user.type(
      screen.getByRole("textbox", {
        name: /^qué necesitas considerar ahora$/i,
      }),
      "Necesito constituir W2 desde A.",
    );
    await user.click(
      screen.getByRole("button", {
        name: /^examinar materiales anteriores$/i,
      }),
    );
    await user.click(
      screen.getByRole("button", { name: /^usar este material 2$/i }),
    );
    await user.type(
      screen.getByRole("textbox", { name: /^nuevo trabajo$/i }),
      "Trabajo actual W2",
    );
    await user.click(
      screen.getByRole("button", { name: /^continuar con este material$/i }),
    );

    const materials = JSON.parse(
      localStorage.getItem("ordinary.materials") ?? "[]",
    ) as Array<{ id: string; content: string }>;
    const W2 = materials.find((material) => material.content === "Trabajo actual W2");

    expect(W2).toBeDefined();

    execution.unmount();
    execution = render(<App />);

    expect(screen.getByLabelText(/^aportación anterior$/i)).toHaveTextContent(
      "Trabajo actual W2",
    );

    await capture(user, "Captura de W2");

    expect.soft(captureItem("Captura de W1")).toHaveTextContent(W1.content);
    expect.soft(captureItem("Captura de W2")).toHaveTextContent("Trabajo actual W2");

    execution.unmount();
  });

  it("[T-HPI-08] el recorrido se ejerce montando únicamente la App ordinaria, sin props ni harness especiales", () => {
    seedW1Context();
    render(<App />);

    expect(
      screen.getByRole("heading", { name: /^dónde estás$/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("region", { name: /^captura contextual$/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("region", { name: /^comparación de documentos$/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("region", { name: /^apoyo auxiliar de ia$/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("region", { name: /^materiales anteriores$/i }),
    ).toBeInTheDocument();
  });
});
