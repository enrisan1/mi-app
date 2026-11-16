import type { ComponentType } from "react";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

type BaselineModule = {
  ContextualCaptureBaseline: ComponentType;
};

async function loadBaseline() {
  vi.resetModules();

  const modules = import.meta.glob<BaselineModule>(
    "./ContextualCaptureBaseline.tsx",
  );
  const load = modules["./ContextualCaptureBaseline.tsx"];

  expect(
    load,
    "R-80-01-M1-A ausente: falta ./ContextualCaptureBaseline.tsx",
  ).toBeTypeOf("function");

  if (!load) {
    throw new Error("R-80-01-M1-A ausente");
  }

  return (await load()).ContextualCaptureBaseline;
}

afterEach(() => {
  cleanup();
  localStorage.clear();
  vi.resetModules();
});

describe("R-80-01-M1-A — baseline de captura con cambio de contexto", () => {
  it("[T-80-01-A01] comienza en una actividad intelectual identificable", async () => {
    const Baseline = await loadBaseline();

    render(<Baseline />);

    expect(
      screen.getByRole("region", { name: /^actividad principal$/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("textbox", { name: /^contenido de trabajo$/i }),
    ).toBeInTheDocument();
  });

  it("[T-80-01-A02] abrir la captura sustituye materialmente la superficie principal", async () => {
    const Baseline = await loadBaseline();
    const user = userEvent.setup();

    render(<Baseline />);

    await user.type(
      screen.getByRole("textbox", { name: /^contenido de trabajo$/i }),
      "Estoy elaborando una explicación sobre el problema actual.",
    );

    await user.click(
      screen.getByRole("button", { name: /^ir a capturar una idea$/i }),
    );

    expect(
      screen.queryByRole("region", { name: /^actividad principal$/i }),
    ).not.toBeInTheDocument();

    expect(
      screen.getByRole("region", { name: /^captura separada$/i }),
    ).toBeInTheDocument();
  });

  it("[T-80-01-A03] registrar exige volver explícitamente a la actividad", async () => {
    const Baseline = await loadBaseline();
    const user = userEvent.setup();

    render(<Baseline />);

    await user.click(
      screen.getByRole("button", { name: /^ir a capturar una idea$/i }),
    );

    await user.type(
      screen.getByRole("textbox", { name: /^idea a conservar$/i }),
      "Comprobar si la fuente distingue memoria de reconstrucción.",
    );

    await user.click(
      screen.getByRole("button", { name: /^guardar idea$/i }),
    );

    expect(
      screen.queryByRole("region", { name: /^actividad principal$/i }),
    ).not.toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: /^volver a la actividad$/i }),
    );

    expect(
      screen.getByRole("region", { name: /^actividad principal$/i }),
    ).toBeInTheDocument();
  });

  it("[T-80-01-A04] el contenido de trabajo sobrevive al recorrido de ida y vuelta", async () => {
    const Baseline = await loadBaseline();
    const user = userEvent.setup();
    const workingText =
      "Estoy elaborando una explicación sobre el problema actual.";

    render(<Baseline />);

    await user.type(
      screen.getByRole("textbox", { name: /^contenido de trabajo$/i }),
      workingText,
    );

    await user.click(
      screen.getByRole("button", { name: /^ir a capturar una idea$/i }),
    );
    await user.type(
      screen.getByRole("textbox", { name: /^idea a conservar$/i }),
      "Comprobar una fuente secundaria.",
    );
    await user.click(screen.getByRole("button", { name: /^guardar idea$/i }));
    await user.click(
      screen.getByRole("button", { name: /^volver a la actividad$/i }),
    );

    expect(
      screen.getByRole("textbox", { name: /^contenido de trabajo$/i }),
    ).toHaveValue(workingText);
  });
});
