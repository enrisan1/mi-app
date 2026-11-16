import type { ComponentType } from "react";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

type ExperienceModule = {
  AuthorIdentityExperience: ComponentType;
};

async function loadExperience() {
  vi.resetModules();

  const modules = import.meta.glob<ExperienceModule>(
    "./AuthorIdentityExperience.tsx",
  );
  const load = modules["./AuthorIdentityExperience.tsx"];

  expect(
    load,
    "R-80-03-M1-B ausente: falta ./AuthorIdentityExperience.tsx",
  ).toBeTypeOf("function");

  if (!load) {
    throw new Error("R-80-03-M1-B ausente");
  }

  return (await load()).AuthorIdentityExperience;
}

afterEach(() => {
  cleanup();
  localStorage.clear();
  vi.resetModules();
});

async function constituteWork(
  content: string,
  authorIdentity: "Alias A" | "Alias B",
) {
  const user = userEvent.setup();

  await user.type(
    screen.getByRole("textbox", { name: /^contenido de la obra$/i }),
    content,
  );

  await user.selectOptions(
    screen.getByRole("combobox", { name: /^identidad autoral$/i }),
    authorIdentity,
  );

  await user.click(
    screen.getByRole("button", { name: /^constituir obra$/i }),
  );

  return user;
}

describe("R-80-03-M1-B — identidad autoral reutilizable elegible", () => {
  it("[T-80-03-B01] distingue identidad operativa de identidades autorales elegibles", async () => {
    const Experience = await loadExperience();

    render(<Experience />);

    expect(
      screen.getByLabelText(/^identidad operativa$/i),
    ).toHaveTextContent("Usuario principal");

    const selector = screen.getByRole("combobox", {
      name: /^identidad autoral$/i,
    });

    expect(selector).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: /^Alias A$/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: /^Alias B$/i }),
    ).toBeInTheDocument();
  });

  it("[T-80-03-B02] permite elegir explícitamente Alias A para una obra", async () => {
    const Experience = await loadExperience();

    render(<Experience />);

    await constituteWork("Obra uno", "Alias A");

    expect(
      screen.getByLabelText(/^autoría de obra 1$/i),
    ).toHaveTextContent("Alias A");
  });

  it("[T-80-03-B03] elegir autoría no modifica la identidad operativa", async () => {
    const Experience = await loadExperience();

    render(<Experience />);

    await constituteWork("Obra uno", "Alias B");

    expect(
      screen.getByLabelText(/^identidad operativa$/i),
    ).toHaveTextContent("Usuario principal");

    expect(
      screen.getByLabelText(/^autoría de obra 1$/i),
    ).toHaveTextContent("Alias B");
  });

  it("[T-80-03-B04] obras distintas pueden usar identidades autorales distintas", async () => {
    const Experience = await loadExperience();

    render(<Experience />);

    await constituteWork("Obra uno", "Alias A");
    await constituteWork("Obra dos", "Alias B");

    expect(
      screen.getByLabelText(/^autoría de obra 1$/i),
    ).toHaveTextContent("Alias A");
    expect(
      screen.getByLabelText(/^autoría de obra 2$/i),
    ).toHaveTextContent("Alias B");
  });

  it("[T-80-03-B05] reutiliza Alias A en otra obra sin recrear la identidad", async () => {
    const Experience = await loadExperience();

    render(<Experience />);

    await constituteWork("Obra uno", "Alias A");
    await constituteWork("Obra dos", "Alias B");
    await constituteWork("Obra tres", "Alias A");

    expect(
      screen.getByLabelText(/^autoría de obra 1$/i),
    ).toHaveTextContent("Alias A");
    expect(
      screen.getByLabelText(/^autoría de obra 3$/i),
    ).toHaveTextContent("Alias A");

    expect(
      screen.getAllByRole("option", { name: /^Alias A$/i }),
    ).toHaveLength(1);
  });

  it("[T-80-03-B06] conserva la asociación obra-autoría tras una nueva ejecución", async () => {
    const Experience = await loadExperience();

    const first = render(<Experience />);

    await constituteWork("Obra persistente", "Alias B");

    first.unmount();

    render(<Experience />);

    expect(
      screen.getByLabelText(/^contenido de obra 1$/i),
    ).toHaveTextContent("Obra persistente");
    expect(
      screen.getByLabelText(/^autoría de obra 1$/i),
    ).toHaveTextContent("Alias B");
  });

  it("[T-80-03-B07] seleccionar autoría no modifica el contenido de la obra", async () => {
    const Experience = await loadExperience();

    render(<Experience />);

    await constituteWork("Contenido que debe permanecer", "Alias B");

    expect(
      screen.getByLabelText(/^contenido de obra 1$/i),
    ).toHaveTextContent("Contenido que debe permanecer");

    expect(
      screen.getByLabelText(/^autoría de obra 1$/i),
    ).toHaveTextContent("Alias B");
  });

  it("[T-80-03-B08] la firma no queda forzada a la identidad operativa", async () => {
    const Experience = await loadExperience();

    render(<Experience />);

    await constituteWork("Obra con seudónimo", "Alias A");

    expect(
      screen.getByLabelText(/^autoría de obra 1$/i),
    ).not.toHaveTextContent("Usuario principal");
  });
});
