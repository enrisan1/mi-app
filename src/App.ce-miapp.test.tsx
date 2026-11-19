import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

const EPISTEMIC_STATE = [
  "ESTADO DE INVESTIGACIÓN",
  "",
  "ACREDITADO: El capítulo I ha sido recuperado y verificado.",
  "HIPÓTESIS: La serie pudo continuar en entregas posteriores.",
  "ABIERTO: Localizar una fuente independiente para el capítulo II.",
  "PENDIENTE: Revisar el índice general de las doce obras.",
].join("\n");

describe("RED-CE-MIAPP-01 — trayectoria discriminante con capacidades ordinarias existentes", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("[T-CE-MIAPP-01] un estado epistemológico autodescriptivo puede persistir, reanudarse y participar en la continuación sin modificar producción", async () => {
    const user = userEvent.setup();

    const firstExecution = render(<App />);

    await user.type(
      screen.getByRole("textbox", { name: /^introduce un texto libre$/i }),
      EPISTEMIC_STATE,
    );
    await user.click(screen.getByRole("button", { name: /^crear$/i }));

    expect(localStorage.getItem("ru2m1.previous")).toBe(EPISTEMIC_STATE);

    firstExecution.unmount();

    render(<App />);

    const restored = screen.getByLabelText(/^aportación anterior$/i);
    expect(restored.textContent).toBe(EPISTEMIC_STATE);

    expect(restored).toHaveTextContent(
      "ACREDITADO: El capítulo I ha sido recuperado y verificado.",
    );
    expect(restored).toHaveTextContent(
      "HIPÓTESIS: La serie pudo continuar en entregas posteriores.",
    );
    expect(restored).toHaveTextContent(
      "ABIERTO: Localizar una fuente independiente para el capítulo II.",
    );
    expect(restored).toHaveTextContent(
      "PENDIENTE: Revisar el índice general de las doce obras.",
    );

    await user.type(
      screen.getByRole("textbox", { name: /^aportación actual$/i }),
      "Consultar la fuente candidata del capítulo II sin reabrir lo ya acreditado.",
    );
    await user.click(screen.getByRole("button", { name: /^crear$/i }));

    expect(screen.getByLabelText(/^antecedente$/i).textContent).toBe(
      EPISTEMIC_STATE,
    );
    expect(screen.getByLabelText(/^actuación actual$/i)).toHaveTextContent(
      "Consultar la fuente candidata del capítulo II sin reabrir lo ya acreditado.",
    );
  });
});
