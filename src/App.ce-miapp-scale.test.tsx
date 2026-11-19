import { beforeEach, describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

const sources = Array.from({ length: 12 }, (_, index) => ({
  id: `s${index + 1}`,
  content: `Fuente ${String(index + 1).padStart(2, "0")} — material documental independiente`,
}));

const COMPLEX_STATE = [
  "ESTADO DE INVESTIGACIÓN — BIBLIOTECA DOCUMENTAL",
  "",
  "ACREDITADO A1 [Fuente 01, Fuente 03]: El capítulo I está recuperado.",
  "ACREDITADO A2 [Fuente 04]: La obra X pertenece al corpus confirmado.",
  "HIPÓTESIS H1 [Fuente 06, Fuente 07]: Puede existir continuidad editorial posterior.",
  "HIPÓTESIS H2 [Fuente 09]: La atribución secundaria requiere contraste.",
  "ABIERTO Q1 [Fuente 07, Fuente 10]: Localizar evidencia independiente para el capítulo II.",
  "ABIERTO Q2 [Fuente 11]: Confirmar si el índice conserva la secuencia completa.",
  "PENDIENTE P1: Revisar las doce obras contra el índice general.",
  "PENDIENTE P2: Contrastar Fuente 03 y Fuente 09 antes de cerrar H2.",
].join("\n");

describe("EVAL-CE-MIAPP-02 — suficiencia estructural en investigación documental más compleja", () => {
  beforeEach(() => {
    localStorage.clear();
    const materials = [
      ...sources,
      { id: "state", content: COMPLEX_STATE },
    ];
    localStorage.setItem("ordinary.materials", JSON.stringify(materials));
    localStorage.setItem("ordinary.current-work-id", "state");
    localStorage.setItem("ru2m1.previous", COMPLEX_STATE);
  });

  it("[T-CE-MIAPP-02] reanuda estado complejo, localiza fuentes, compara y continúa desde una fuente sin perder el contexto previo", async () => {
    const user = userEvent.setup();

    const firstExecution = render(<App />);

    expect(screen.getByLabelText(/^aportación anterior$/i).textContent).toBe(
      COMPLEX_STATE,
    );

    const comparison = screen.getByRole("region", {
      name: /^comparación de documentos$/i,
    });

    await user.selectOptions(
      within(comparison).getByRole("combobox", { name: /^documento a$/i }),
      "s3",
    );
    await user.selectOptions(
      within(comparison).getByRole("combobox", { name: /^documento b$/i }),
      "s9",
    );
    await user.click(
      within(comparison).getByRole("button", { name: /^comparar$/i }),
    );

    const active = within(comparison).getByRole("region", {
      name: /^comparación activa$/i,
    });
    expect(active).toHaveTextContent("Fuente 03");
    expect(active).toHaveTextContent("Fuente 09");
    expect(active).toHaveTextContent("ESTADO DE INVESTIGACIÓN");

    await user.type(
      screen.getByRole("textbox", { name: /^qué necesitas considerar ahora$/i }),
      "Resolver Q1 sin reabrir A1 ni A2.",
    );
    await user.click(
      screen.getByRole("button", { name: /^examinar materiales anteriores$/i }),
    );

    const materialsRegion = screen.getByLabelText(/^materiales anteriores$/i);
    expect(within(materialsRegion).getAllByRole("article")).toHaveLength(13);

    const source7 = within(materialsRegion)
      .getByText("Fuente 07 — material documental independiente")
      .closest("article");

    if (source7 === null) {
      throw new Error("Fuente 07 no localizada");
    }

    await user.click(
      within(source7).getByRole("button", { name: /usar este material/i }),
    );

    await user.type(
      screen.getByRole("textbox", { name: /^nuevo trabajo$/i }),
      "Nueva síntesis S1: Fuente 07 aporta indicio para Q1, pero Q1 sigue abierta hasta contraste independiente.",
    );
    await user.click(
      screen.getByRole("button", { name: /^continuar con este material$/i }),
    );

    expect(screen.getByLabelText(/^nuevo trabajo constituido$/i)).toHaveTextContent(
      "Q1 sigue abierta",
    );

    firstExecution.unmount();

    render(<App />);

    expect(screen.getByLabelText(/^aportación anterior$/i)).toHaveTextContent(
      "Nueva síntesis S1",
    );

    const stored = JSON.parse(
      localStorage.getItem("ordinary.materials") ?? "[]",
    ) as Array<{ id: string; content: string; antecedentMaterialId?: string }>;

    const newWork = stored.find((item) =>
      item.content.startsWith("Nueva síntesis S1"),
    );

    expect(newWork?.antecedentMaterialId).toBe("s7");
    expect(stored.some((item) => item.content === COMPLEX_STATE)).toBe(true);
  });
});
