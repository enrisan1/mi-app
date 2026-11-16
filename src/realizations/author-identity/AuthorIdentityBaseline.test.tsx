import type { ComponentType } from "react";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

type BaselineModule = {
  AuthorIdentityBaseline: ComponentType;
};

async function loadBaseline() {
  vi.resetModules();

  const modules = import.meta.glob<BaselineModule>(
    "./AuthorIdentityBaseline.tsx",
  );
  const load = modules["./AuthorIdentityBaseline.tsx"];

  expect(
    load,
    "R-80-03-M1-A ausente: falta ./AuthorIdentityBaseline.tsx",
  ).toBeTypeOf("function");

  if (!load) {
    throw new Error("R-80-03-M1-A ausente");
  }

  return (await load()).AuthorIdentityBaseline;
}

afterEach(() => {
  cleanup();
  localStorage.clear();
  vi.resetModules();
});

describe("R-80-03-M1-A — baseline con firma operativa obligatoria", () => {
  it("[T-80-03-A01] hace identificable la identidad operativa principal", async () => {
    const Baseline = await loadBaseline();

    render(<Baseline />);

    expect(
      screen.getByLabelText(/^identidad operativa$/i),
    ).toHaveTextContent("Usuario principal");
  });

  it("[T-80-03-A02] una obra queda firmada necesariamente con la identidad operativa", async () => {
    const Baseline = await loadBaseline();
    const user = userEvent.setup();

    render(<Baseline />);

    await user.type(
      screen.getByRole("textbox", { name: /^contenido de la obra$/i }),
      "Primera obra",
    );

    await user.click(
      screen.getByRole("button", { name: /^constituir obra$/i }),
    );

    expect(
      screen.getByLabelText(/^autoría de obra 1$/i),
    ).toHaveTextContent("Usuario principal");
  });

  it("[T-80-03-A03] no ofrece una identidad autoral distinta seleccionable", async () => {
    const Baseline = await loadBaseline();

    render(<Baseline />);

    expect(
      screen.queryByRole("combobox", { name: /^identidad autoral$/i }),
    ).not.toBeInTheDocument();

    expect(screen.queryByText(/^Alias A$/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/^Alias B$/i)).not.toBeInTheDocument();
  });
});
