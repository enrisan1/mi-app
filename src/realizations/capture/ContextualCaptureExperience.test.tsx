import type { ComponentType } from "react";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

type CaptureModule = {
  ContextualCaptureExperience: ComponentType;
};

async function loadExperience() {
  vi.resetModules();

  const modules = import.meta.glob<CaptureModule>(
    "./ContextualCaptureExperience.tsx",
  );
  const load = modules["./ContextualCaptureExperience.tsx"];

  expect(
    load,
    "R-80-01-M1-B ausente: falta ./ContextualCaptureExperience.tsx",
  ).toBeTypeOf("function");

  if (!load) {
    throw new Error("R-80-01-M1-B ausente");
  }

  return (await load()).ContextualCaptureExperience;
}

beforeEach(() => {
  localStorage.clear();
});

afterEach(() => {
  cleanup();
  localStorage.clear();
  vi.resetModules();
});

describe("R-80-01-M1-B — captura contextual mínima", () => {
  it("[T-80-01-B01] mantiene identificable la actividad principal al abrir captura", async () => {
    const Experience = await loadExperience();
    const user = userEvent.setup();

    render(<Experience />);

    await user.type(
      screen.getByRole("textbox", { name: /^contenido de trabajo$/i }),
      "Estoy desarrollando el argumento principal.",
    );

    await user.click(
      screen.getByRole("button", { name: /^capturar aportación$/i }),
    );

    expect(
      screen.getByRole("region", { name: /^actividad principal$/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("textbox", { name: /^contenido de trabajo$/i }),
    ).toHaveValue("Estoy desarrollando el argumento principal.");

    expect(
      screen.getByRole("region", { name: /^captura contextual$/i }),
    ).toBeInTheDocument();
  });

  it("[T-80-01-B02] conserva una aportación breve sólo tras acción explícita", async () => {
    const Experience = await loadExperience();
    const user = userEvent.setup();

    render(<Experience />);

    await user.click(
      screen.getByRole("button", { name: /^capturar aportación$/i }),
    );

    await user.type(
      screen.getByRole("textbox", { name: /^aportación breve$/i }),
      "Revisar la distinción entre fuente y elaboración.",
    );

    expect(screen.queryByRole("list", { name: /^capturas conservadas$/i }))
      .not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /^conservar$/i }));

    expect(
      screen.getByRole("list", { name: /^capturas conservadas$/i }),
    ).toHaveTextContent("Revisar la distinción entre fuente y elaboración.");
  });

  it("[T-80-01-B03] registra una referencia temporal observable", async () => {
    const Experience = await loadExperience();
    const user = userEvent.setup();

    render(<Experience />);

    await user.click(
      screen.getByRole("button", { name: /^capturar aportación$/i }),
    );
    await user.type(
      screen.getByRole("textbox", { name: /^aportación breve$/i }),
      "Idea con marca temporal.",
    );
    await user.click(screen.getByRole("button", { name: /^conservar$/i }));

    const time = document.querySelector("time");

    expect(time).not.toBeNull();

    const datetime = time!.getAttribute("datetime");

    expect(datetime).not.toBeNull();
    expect(Number.isNaN(Date.parse(datetime!))).toBe(false);
    expect(time!.textContent?.trim().length).toBeGreaterThan(0);
  });

  it("[T-80-01-B04] conservar no modifica el contenido de la actividad principal", async () => {
    const Experience = await loadExperience();
    const user = userEvent.setup();
    const workingText = "Argumento que debe permanecer intacto.";

    render(<Experience />);

    await user.type(
      screen.getByRole("textbox", { name: /^contenido de trabajo$/i }),
      workingText,
    );
    await user.click(
      screen.getByRole("button", { name: /^capturar aportación$/i }),
    );
    await user.type(
      screen.getByRole("textbox", { name: /^aportación breve$/i }),
      "Una idea lateral.",
    );
    await user.click(screen.getByRole("button", { name: /^conservar$/i }));

    expect(
      screen.getByRole("textbox", { name: /^contenido de trabajo$/i }),
    ).toHaveValue(workingText);
  });

  it("[T-80-01-B05] tras conservar cierra la captura y permite continuar inmediatamente", async () => {
    const Experience = await loadExperience();
    const user = userEvent.setup();

    render(<Experience />);

    await user.type(
      screen.getByRole("textbox", { name: /^contenido de trabajo$/i }),
      "Primera frase.",
    );
    await user.click(
      screen.getByRole("button", { name: /^capturar aportación$/i }),
    );
    await user.type(
      screen.getByRole("textbox", { name: /^aportación breve$/i }),
      "Idea lateral.",
    );
    await user.click(screen.getByRole("button", { name: /^conservar$/i }));

    expect(
      screen.queryByRole("region", { name: /^captura contextual$/i }),
    ).not.toBeInTheDocument();

    const work = screen.getByRole("textbox", {
      name: /^contenido de trabajo$/i,
    });

    await user.type(work, " Segunda frase.");

    expect(work).toHaveValue("Primera frase. Segunda frase.");
  });

  it("[T-80-01-B06] recupera posteriormente una captura conservada", async () => {
    const Experience = await loadExperience();
    const user = userEvent.setup();

    const first = render(<Experience />);

    await user.click(
      screen.getByRole("button", { name: /^capturar aportación$/i }),
    );
    await user.type(
      screen.getByRole("textbox", { name: /^aportación breve$/i }),
      "Hipótesis para revisar después.",
    );
    await user.click(screen.getByRole("button", { name: /^conservar$/i }));

    first.unmount();

    render(<Experience />);

    expect(
      screen.getByRole("list", { name: /^capturas conservadas$/i }),
    ).toHaveTextContent("Hipótesis para revisar después.");
  });

  it("[T-80-01-B07] cancelar una captura no conserva nada ni altera la actividad", async () => {
    const Experience = await loadExperience();
    const user = userEvent.setup();

    render(<Experience />);

    await user.type(
      screen.getByRole("textbox", { name: /^contenido de trabajo$/i }),
      "Trabajo actual.",
    );
    await user.click(
      screen.getByRole("button", { name: /^capturar aportación$/i }),
    );
    await user.type(
      screen.getByRole("textbox", { name: /^aportación breve$/i }),
      "Idea descartada.",
    );
    await user.click(screen.getByRole("button", { name: /^cancelar$/i }));

    expect(
      screen.getByRole("textbox", { name: /^contenido de trabajo$/i }),
    ).toHaveValue("Trabajo actual.");

    expect(screen.queryByText("Idea descartada.")).not.toBeInTheDocument();
  });

  it("[T-80-01-B08] capturar no clasifica ni incorpora automáticamente la aportación", async () => {
    const Experience = await loadExperience();
    const user = userEvent.setup();

    render(<Experience />);

    await user.type(
      screen.getByRole("textbox", { name: /^contenido de trabajo$/i }),
      "Contenido principal.",
    );
    await user.click(
      screen.getByRole("button", { name: /^capturar aportación$/i }),
    );
    await user.type(
      screen.getByRole("textbox", { name: /^aportación breve$/i }),
      "Idea auxiliar.",
    );
    await user.click(screen.getByRole("button", { name: /^conservar$/i }));

    expect(
      screen.getByRole("textbox", { name: /^contenido de trabajo$/i }),
    ).toHaveValue("Contenido principal.");

    expect(
      screen.queryByRole("combobox", { name: /clasific/i }),
    ).not.toBeInTheDocument();
    expect(screen.queryByText(/generad[oa] por ia/i)).not.toBeInTheDocument();
  });
});
