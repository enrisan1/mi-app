import type { ComponentType } from "react";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

type ComparisonExperienceModule = {
  ComparisonExperience: ComponentType;
};

// Testigo contingente de R-80-02-M1 para CH-80-02-01.
// La carga dinámica permite conservar los tests en rojo mientras todavía no
// existe ./ComparisonExperience.tsx, sin introducir una implementación sustituta.
async function loadComparisonExperience() {
  vi.resetModules();

  const modules =
    import.meta.glob<ComparisonExperienceModule>("./ComparisonExperience.tsx");
  const load = modules["./ComparisonExperience.tsx"];

  expect(
    load,
    "R-80-02-M1 ausente: falta ./ComparisonExperience.tsx",
  ).toBeTypeOf("function");

  if (!load) {
    throw new Error("R-80-02-M1 ausente");
  }

  return (await load()).ComparisonExperience;
}

async function constituteComparison(first = "Documento A", second = "Documento B") {
  const ComparisonExperience = await loadComparisonExperience();
  const user = userEvent.setup();

  render(<ComparisonExperience />);

  await user.type(
    screen.getByRole("textbox", { name: /^documento 1$/i }),
    first,
  );
  await user.type(
    screen.getByRole("textbox", { name: /^documento 2$/i }),
    second,
  );

  await user.click(
    screen.getByRole("button", { name: /^constituir comparación$/i }),
  );

  return { user, first, second };
}

afterEach(() => {
  cleanup();
  vi.resetModules();
});

describe("R-80-02-M1 — situación comparativa mínima", () => {
  it("[T-80-02-01] constituye una situación comparativa activa con D1 y D2 diferenciados", async () => {
    const { first, second } = await constituteComparison();

    expect(
      screen.getByLabelText(/^situación comparativa activa$/i),
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/^documento 1 activo$/i)).toHaveTextContent(
      first,
    );
    expect(screen.getByLabelText(/^documento 2 activo$/i)).toHaveTextContent(
      second,
    );
  });

  it("[T-80-02-02] considerar D1 no sustituye ni elimina D2 de la situación comparativa", async () => {
    const { user, first, second } = await constituteComparison();

    await user.click(
      screen.getByRole("button", { name: /^considerar documento 1$/i }),
    );

    expect(screen.getByLabelText(/^documento considerado$/i)).toHaveTextContent(
      first,
    );
    expect(screen.getByLabelText(/^documento 1 activo$/i)).toHaveTextContent(
      first,
    );
    expect(screen.getByLabelText(/^documento 2 activo$/i)).toHaveTextContent(
      second,
    );
  });

  it("[T-80-02-03] constituir y abandonar la comparación no modifica el contenido de D1 ni D2", async () => {
    const { user, first, second } = await constituteComparison();

    await user.click(
      screen.getByRole("button", { name: /^salir de comparación$/i }),
    );

    expect(
      screen.queryByLabelText(/^situación comparativa activa$/i),
    ).not.toBeInTheDocument();

    expect(
      screen.getByRole("textbox", { name: /^documento 1$/i }),
    ).toHaveValue(first);
    expect(
      screen.getByRole("textbox", { name: /^documento 2$/i }),
    ).toHaveValue(second);
  });

  it("[T-80-02-04] un único documento no puede constituir por sí solo una situación comparativa", async () => {
    const ComparisonExperience = await loadComparisonExperience();
    const user = userEvent.setup();

    render(<ComparisonExperience />);

    await user.type(
      screen.getByRole("textbox", { name: /^documento 1$/i }),
      "Documento A",
    );

    expect(
      screen.getByRole("button", { name: /^constituir comparación$/i }),
    ).toBeDisabled();

    expect(
      screen.queryByLabelText(/^situación comparativa activa$/i),
    ).not.toBeInTheDocument();
  });
});
