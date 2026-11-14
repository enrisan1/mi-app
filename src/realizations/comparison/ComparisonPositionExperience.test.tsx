import type { ComponentType } from "react";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

type ComparisonPositionExperienceModule = {
  ComparisonPositionExperience: ComponentType<{
    first: string;
    second: string;
  }>;
};

// RED de R-80-02-M2.
// La carga dinámica conserva la ausencia de producción como causa explícita
// mientras todavía no existe ./ComparisonPositionExperience.tsx.
async function loadComparisonPositionExperience() {
  vi.resetModules();

  const modules =
    import.meta.glob<ComparisonPositionExperienceModule>(
      "./ComparisonPositionExperience.tsx",
    );
  const load = modules["./ComparisonPositionExperience.tsx"];

  expect(
    load,
    "R-80-02-M2 ausente: falta ./ComparisonPositionExperience.tsx",
  ).toBeTypeOf("function");

  if (!load) {
    throw new Error("R-80-02-M2 ausente");
  }

  return (await load()).ComparisonPositionExperience;
}

const FIRST = [
  "Documento uno",
  ...Array.from({ length: 40 }, (_, index) => `Línea A ${index + 1}`),
].join("\n");

const SECOND = [
  "Documento dos",
  ...Array.from({ length: 40 }, (_, index) => `Línea B ${index + 1}`),
].join("\n");

async function renderExperience() {
  const ComparisonPositionExperience =
    await loadComparisonPositionExperience();

  render(
    <ComparisonPositionExperience
      first={FIRST}
      second={SECOND}
    />,
  );

  return {
    first: screen.getByLabelText(/^superficie documento 1$/i),
    second: screen.getByLabelText(/^superficie documento 2$/i),
  };
}

afterEach(() => {
  cleanup();
  vi.resetModules();
});

describe("R-80-02-M2 — continuidad de posición comparativa", () => {
  it("[T-80-02-M2-01] mantiene D1 y D2 montados simultáneamente", async () => {
    const { first, second } = await renderExperience();

    expect(first).toBeInTheDocument();
    expect(second).toBeInTheDocument();

    expect(first).toHaveTextContent("Documento uno");
    expect(second).toHaveTextContent("Documento dos");
  });

  it("[T-80-02-M2-02] desplazar D1 no altera la posición de D2", async () => {
    const { first, second } = await renderExperience();

    Object.defineProperty(first, "scrollTop", {
      value: 0,
      writable: true,
      configurable: true,
    });
    Object.defineProperty(second, "scrollTop", {
      value: 180,
      writable: true,
      configurable: true,
    });

    first.scrollTop = 320;
    first.dispatchEvent(new Event("scroll"));

    expect(first.scrollTop).toBe(320);
    expect(second.scrollTop).toBe(180);
  });

  it("[T-80-02-M2-03] desplazar D2 no altera la posición de D1", async () => {
    const { first, second } = await renderExperience();

    Object.defineProperty(first, "scrollTop", {
      value: 140,
      writable: true,
      configurable: true,
    });
    Object.defineProperty(second, "scrollTop", {
      value: 0,
      writable: true,
      configurable: true,
    });

    second.scrollTop = 360;
    second.dispatchEvent(new Event("scroll"));

    expect(second.scrollTop).toBe(360);
    expect(first.scrollTop).toBe(140);
  });

  it("[T-80-02-M2-04] no calcula ni presenta diferencias automáticamente", async () => {
    await renderExperience();

    expect(
      screen.queryByText(/diferencia detectada/i),
    ).not.toBeInTheDocument();

    expect(
      screen.queryByLabelText(/diferencias calculadas/i),
    ).not.toBeInTheDocument();
  });

  it("[T-80-02-M2-05] conserva íntegros D1 y D2 durante el recorrido comparativo", async () => {
    const { first, second } = await renderExperience();
    const user = userEvent.setup();

    expect(first.textContent).toBe(FIRST);
    expect(second.textContent).toBe(SECOND);

    await user.click(first);
    await user.click(second);

    expect(first.textContent).toBe(FIRST);
    expect(second.textContent).toBe(SECOND);
  });
});