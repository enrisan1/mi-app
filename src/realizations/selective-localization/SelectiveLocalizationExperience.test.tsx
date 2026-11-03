import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import { SelectiveLocalizationExperience } from "./SelectiveLocalizationExperience";

const materials = [
  "Material uno sobre una cuestión anterior",
  "Material dos con el contenido que después será necesario",
  "Material tres sobre otra cuestión",
] as const;

async function createThreeMaterials(user: ReturnType<typeof userEvent.setup>) {
  for (const content of materials) {
    const input = screen.getByRole("textbox", { name: /material actual/i });

    await user.type(input, content);
    await user.click(
      screen.getByRole("button", { name: /conservar material/i }),
    );
  }
}

describe("SelectiveLocalizationExperience", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("[T-RLS-01] creates three materials through ordinary interaction", async () => {
    const user = userEvent.setup();

    render(<SelectiveLocalizationExperience />);

    await createThreeMaterials(user);

    expect(screen.getByRole("status")).toHaveTextContent(
      /pluralidad.*constituida.*conservada/i,
    );

    expect(
      screen.getByText(/materiales conservados:\s*3 de 3/i),
    ).toBeInTheDocument();
  });

  it("[T-RLS-02] recovers the constituted plurality after a real remount", async () => {
    const user = userEvent.setup();

    const firstExecution = render(<SelectiveLocalizationExperience />);

    await createThreeMaterials(user);

    firstExecution.unmount();

    render(<SelectiveLocalizationExperience />);

    expect(
      screen.getByRole("heading", { name: /actividad posterior/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/hay 3 materiales anteriores conservados/i),
    ).toBeInTheDocument();
  });

  it("[T-RLS-03] does not expose material contents initially in the later activity", async () => {
    const user = userEvent.setup();

    const firstExecution = render(<SelectiveLocalizationExperience />);

    await createThreeMaterials(user);

    firstExecution.unmount();

    render(<SelectiveLocalizationExperience />);

    for (const content of materials) {
      expect(
        screen.queryByText(content, { exact: true }),
      ).not.toBeInTheDocument();
    }
  });

  it("[T-RLS-04] requires a later need before inspection becomes available", async () => {
    const user = userEvent.setup();

    const firstExecution = render(<SelectiveLocalizationExperience />);

    await createThreeMaterials(user);

    firstExecution.unmount();

    render(<SelectiveLocalizationExperience />);

    const inspectButton = screen.getByRole("button", {
      name: /examinar materiales anteriores/i,
    });

    expect(inspectButton).toBeDisabled();

    await user.type(
      screen.getByRole("textbox", {
        name: /qué necesitas considerar ahora/i,
      }),
      "Necesito volver a considerar el material que trataba la cuestión necesaria.",
    );

    expect(inspectButton).toBeEnabled();
  });

  it("[T-RLS-05] makes the conserved plurality inspectable after explicit activation", async () => {
    const user = userEvent.setup();

    const firstExecution = render(<SelectiveLocalizationExperience />);

    await createThreeMaterials(user);

    firstExecution.unmount();

    render(<SelectiveLocalizationExperience />);

    await user.type(
      screen.getByRole("textbox", {
        name: /qué necesitas considerar ahora/i,
      }),
      "Necesito revisar una cuestión tratada anteriormente.",
    );

    await user.click(
      screen.getByRole("button", {
        name: /examinar materiales anteriores/i,
      }),
    );

    expect(
      screen.getByLabelText(/contenido de material 1/i),
    ).toHaveTextContent(materials[0]);

    expect(
      screen.getByLabelText(/contenido de material 2/i),
    ).toHaveTextContent(materials[1]);

    expect(
      screen.getByLabelText(/contenido de material 3/i),
    ).toHaveTextContent(materials[2]);
  });

  it("[T-RLS-06] keeps every candidate selectable without automatic selection", async () => {
    const user = userEvent.setup();

    const firstExecution = render(<SelectiveLocalizationExperience />);

    await createThreeMaterials(user);

    firstExecution.unmount();

    render(<SelectiveLocalizationExperience />);

    await user.type(
      screen.getByRole("textbox", {
        name: /qué necesitas considerar ahora/i,
      }),
      "Necesito revisar material anterior.",
    );

    await user.click(
      screen.getByRole("button", {
        name: /examinar materiales anteriores/i,
      }),
    );

    expect(
      screen.queryByRole("heading", { name: /material seleccionado/i }),
    ).not.toBeInTheDocument();

    for (const index of [1, 2, 3]) {
      expect(
        screen.getByRole("button", {
          name: `Usar este material ${index}`,
        }),
      ).toBeEnabled();
    }
  });

  it("[T-RLS-07] records exactly the candidate explicitly selected by the person", async () => {
    const user = userEvent.setup();

    const firstExecution = render(<SelectiveLocalizationExperience />);

    await createThreeMaterials(user);

    firstExecution.unmount();

    render(<SelectiveLocalizationExperience />);

    await user.type(
      screen.getByRole("textbox", {
        name: /qué necesitas considerar ahora/i,
      }),
      "Necesito revisar el material pertinente para la actividad actual.",
    );

    await user.click(
      screen.getByRole("button", {
        name: /examinar materiales anteriores/i,
      }),
    );

    await user.click(
      screen.getByRole("button", { name: "Usar este material 2" }),
    );

    expect(
      screen.getByLabelText(/contenido seleccionado/i),
    ).toHaveTextContent(materials[1]);
  });

  it("[T-RLS-08] reactivates the selected material in new work", async () => {
    const user = userEvent.setup();

    const firstExecution = render(<SelectiveLocalizationExperience />);

    await createThreeMaterials(user);

    firstExecution.unmount();

    render(<SelectiveLocalizationExperience />);

    await user.type(
      screen.getByRole("textbox", {
        name: /qué necesitas considerar ahora/i,
      }),
      "Necesito recuperar una aportación anterior para continuar.",
    );

    await user.click(
      screen.getByRole("button", {
        name: /examinar materiales anteriores/i,
      }),
    );

    await user.click(
      screen.getByRole("button", { name: "Usar este material 2" }),
    );

    await user.type(
      screen.getByRole("textbox", { name: /nuevo trabajo/i }),
      "Nuevo resultado producido a partir del material recuperado",
    );

    await user.click(
      screen.getByRole("button", {
        name: /continuar con este material/i,
      }),
    );

    expect(
      screen.getByLabelText(/nuevo trabajo constituido/i),
    ).toHaveTextContent(
      "Nuevo resultado producido a partir del material recuperado",
    );
  });

  it("[T-RLS-09] preserves material content literally across persistence", async () => {
    const user = userEvent.setup();
    const literalContent = "  Material con espacios conservados literalmente  ";

    const firstExecution = render(<SelectiveLocalizationExperience />);

    await user.type(
      screen.getByRole("textbox", { name: /material actual/i }),
      literalContent,
    );

    await user.click(
      screen.getByRole("button", { name: /conservar material/i }),
    );

    for (const content of [materials[1], materials[2]]) {
      await user.type(
        screen.getByRole("textbox", { name: /material actual/i }),
        content,
      );

      await user.click(
        screen.getByRole("button", { name: /conservar material/i }),
      );
    }

    firstExecution.unmount();

    render(<SelectiveLocalizationExperience />);

    await user.type(
      screen.getByRole("textbox", {
        name: /qué necesitas considerar ahora/i,
      }),
      "Necesito inspeccionar los materiales anteriores.",
    );

    await user.click(
      screen.getByRole("button", {
        name: /examinar materiales anteriores/i,
      }),
    );

    expect(
      screen.getByLabelText(/contenido de material 1/i).textContent,
    ).toBe(literalContent);
  });

  it("[T-RLS-INTEGRATION-01] exercises the complete ordinary selective-localization trajectory", async () => {
    const user = userEvent.setup();

    const firstExecution = render(<SelectiveLocalizationExperience />);

    await createThreeMaterials(user);

    expect(
      screen.queryByRole("heading", { name: /actividad posterior/i }),
    ).not.toBeInTheDocument();

    firstExecution.unmount();

    render(<SelectiveLocalizationExperience />);

    for (const content of materials) {
      expect(
        screen.queryByText(content, { exact: true }),
      ).not.toBeInTheDocument();
    }

    await user.type(
      screen.getByRole("textbox", {
        name: /qué necesitas considerar ahora/i,
      }),
      "Necesito volver al material cuyo contenido permite continuar esta cuestión.",
    );

    await user.click(
      screen.getByRole("button", {
        name: /examinar materiales anteriores/i,
      }),
    );

    expect(
      screen.getByLabelText(/contenido de material 2/i),
    ).toHaveTextContent(materials[1]);

    expect(
      screen.queryByRole("heading", { name: /material seleccionado/i }),
    ).not.toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: "Usar este material 2" }),
    );

    expect(
      screen.getByLabelText(/contenido seleccionado/i),
    ).toHaveTextContent(materials[1]);

    await user.type(
      screen.getByRole("textbox", { name: /nuevo trabajo/i }),
      "Resultado posterior",
    );

    await user.click(
      screen.getByRole("button", {
        name: /continuar con este material/i,
      }),
    );

    expect(
      screen.getByLabelText(/nuevo trabajo constituido/i),
    ).toHaveTextContent("Resultado posterior");
  });
});
