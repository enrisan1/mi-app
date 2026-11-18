import { beforeEach, describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

const W1 = { id: "w1", content: "Trabajo actual W1" };
const A = { id: "a", content: "Antecedente A" };
const B = { id: "b", content: "Antecedente B" };

function seed() {
  localStorage.setItem("ru2m1.previous", W1.content);
  localStorage.setItem("ordinary.materials", JSON.stringify([W1, A, B]));
}

async function capture(user: ReturnType<typeof userEvent.setup>, text: string) {
  await user.click(screen.getByRole("button", { name: /^capturar aportación$/i }));
  await user.type(screen.getByLabelText(/^aportación breve$/i), text);
  await user.click(screen.getByRole("button", { name: /^conservar$/i }));
}

function captureItem(text: string) {
  const item = screen.getByText(text).closest("li");
  if (item === null) throw new Error("captura no encontrada: " + text);
  return item;
}

describe("R-HPI-03 — validación integrada de HITO-HPI-01", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("[V-HPI-01] caso positivo integrado mantiene W1 como contexto común a través de antecedente, captura, comparación, IA y reanudación", async () => {
    const user = userEvent.setup();
    seed();

    const execution = render(<App />);

    await user.type(
      screen.getByRole("textbox", { name: /^qué necesitas considerar ahora$/i }),
      "Consultar A manteniendo W1.",
    );
    await user.click(
      screen.getByRole("button", { name: /^examinar materiales anteriores$/i }),
    );
    await user.click(
      screen.getByRole("button", { name: /^usar este material 2$/i }),
    );

    expect(screen.getByLabelText(/^contenido seleccionado$/i)).toHaveTextContent(A.content);
    expect(localStorage.getItem("ru2m1.previous")).toBe(W1.content);

    await capture(user, "Captura integrada W1");
    expect(captureItem("Captura integrada W1")).toHaveTextContent(W1.content);

    const comparison = screen.getByRole("region", { name: /^comparación de documentos$/i });
    await user.selectOptions(
      within(comparison).getByRole("combobox", { name: /^documento a$/i }),
      A.id,
    );
    await user.selectOptions(
      within(comparison).getByRole("combobox", { name: /^documento b$/i }),
      B.id,
    );
    await user.click(within(comparison).getByRole("button", { name: /^comparar$/i }));

    expect(
      within(comparison).getByRole("region", { name: /^comparación activa$/i }),
    ).toHaveTextContent(W1.content);

    const ai = screen.getByRole("region", { name: /^apoyo auxiliar de ia$/i });
    expect(
      within(ai).getByRole("combobox", { name: /^obra para apoyo ia$/i }),
    ).toHaveValue(W1.id);

    execution.unmount();
    render(<App />);

    expect(screen.getByLabelText(/^aportación anterior$/i)).toHaveTextContent(W1.content);
    expect(captureItem("Captura integrada W1")).toHaveTextContent(W1.content);
  });

  it("[V-HPI-02] control W1/W2 + variación cambia trabajo, antecedente y operación auxiliar sin contaminación cruzada", async () => {
    const user = userEvent.setup();
    seed();

    let execution = render(<App />);

    await user.type(
      screen.getByRole("textbox", { name: /^qué necesitas considerar ahora$/i }),
      "Primera fase: consultar A.",
    );
    await user.click(
      screen.getByRole("button", { name: /^examinar materiales anteriores$/i }),
    );
    await user.click(
      screen.getByRole("button", { name: /^usar este material 2$/i }),
    );

    const comparison = screen.getByRole("region", { name: /^comparación de documentos$/i });
    await user.selectOptions(
      within(comparison).getByRole("combobox", { name: /^documento a$/i }),
      A.id,
    );
    await user.selectOptions(
      within(comparison).getByRole("combobox", { name: /^documento b$/i }),
      B.id,
    );
    await user.click(within(comparison).getByRole("button", { name: /^comparar$/i }));

    expect(
      within(comparison).getByRole("region", { name: /^comparación activa$/i }),
    ).toHaveTextContent(W1.content);

    await user.type(
      screen.getByRole("textbox", { name: /^nuevo trabajo$/i }),
      "Trabajo actual W2",
    );
    await user.click(
      screen.getByRole("button", { name: /^continuar con este material$/i }),
    );

    execution.unmount();
    execution = render(<App />);

    expect(screen.getByLabelText(/^aportación anterior$/i)).toHaveTextContent("Trabajo actual W2");

    await user.type(
      screen.getByRole("textbox", { name: /^qué necesitas considerar ahora$/i }),
      "Segunda fase: consultar B bajo W2.",
    );
    await user.click(
      screen.getByRole("button", { name: /^examinar materiales anteriores$/i }),
    );
    await user.click(
      screen.getByRole("button", { name: /^usar este material 3$/i }),
    );

    expect(screen.getByLabelText(/^contenido seleccionado$/i)).toHaveTextContent(B.content);

    await capture(user, "Captura de W2");
    expect(captureItem("Captura de W2")).toHaveTextContent("Trabajo actual W2");

    const ai = screen.getByRole("region", { name: /^apoyo auxiliar de ia$/i });
    const aiWork = within(ai).getByRole("combobox", { name: /^obra para apoyo ia$/i });
    expect(aiWork).not.toHaveValue(W1.id);

    const materials = JSON.parse(localStorage.getItem("ordinary.materials") ?? "[]") as Array<{id:string;content:string}>;
    const w2 = materials.find((material) => material.content === "Trabajo actual W2");
    expect(w2).toBeDefined();
    expect(aiWork).toHaveValue(w2?.id);

    expect(localStorage.getItem("ru2m1.previous")).toBe("Trabajo actual W2");

    execution.unmount();
  });
});
