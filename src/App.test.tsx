import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

const FIRST_CONTRIBUTION =
  "PV-003 dispone de un witness realizativo ejecutable local dentro de R-U2-M1.";
const FIRST_DIFFERENCE =
  "La suficiencia local de la misma experiencia no proporciona fundamento para derivar una realización autónoma para este witness.";
const FIRST_RESOLUTION = {
  contribution: FIRST_CONTRIBUTION,
  kind: "difference" as const,
  content: FIRST_DIFFERENCE,
};
const SECOND_CONTRIBUTION =
  "Para la única pareja concreta C/B ejercida, queda establecida una integración ordinaria local de PV-003.";
const SECOND_DIFFERENCE =
  "Esta conclusión no establece integración general, satisfacción general o completa de PV-003 ni resolución para cualquier aportación.";
const SECOND_RESOLUTION = {
  contribution: SECOND_CONTRIBUTION,
  kind: "difference" as const,
  content: SECOND_DIFFERENCE,
};
const THIRD_CONTRIBUTION =
  "Dos resoluciones reales distintas y previamente legitimadas pueden coexistir en la misma entrada ordinaria manteniendo correspondencias independientes.";
const THIRD_DIFFERENCE =
  "La evidencia descarta imponer unicidad global de resolución, pero no establece cardinalidad arbitraria, colección ni búsqueda general de resoluciones.";
const THIRD_RESOLUTION = {
  contribution: THIRD_CONTRIBUTION,
  kind: "difference" as const,
  content: THIRD_DIFFERENCE,
};

describe("App", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  // Fragmentos literales de la asistencia de este testigo, no paráfrasis de P.
  const assistance =
    /El lápiz cuesta 1 euro|2 euros que corresponden a dos veces el precio del lápiz/;
  const assistanceText =
    "El lápiz cuesta 1 euro: al restar los 3 euros de diferencia, quedan " +
    "2 euros que corresponden a dos veces el precio del lápiz.";

  function expectAssistanceAbsent() {
    // Los antecedentes y entradas de estos casos no contienen la asistencia.
    // El ámbito global incluye contenido fuera de la región del problema.
    expect(document.body).not.toHaveTextContent(assistance);
    expect(screen.queryByDisplayValue(assistance)).not.toBeInTheDocument();
    expect(screen.queryByPlaceholderText(assistance)).not.toBeInTheDocument();
    expect(screen.queryByTitle(assistance)).not.toBeInTheDocument();
    for (const element of document.body.querySelectorAll("*")) {
      expect(element).not.toHaveAccessibleName(assistance);
      expect(element).not.toHaveAccessibleDescription(assistance);
    }
  }

  it("ofrece el problema sin presentar la asistencia en la App antes de solicitarla", () => {
    localStorage.setItem("ru2m1.previous", "Aportación anterior");
    render(<App />);

    const problem = screen.getByRole("region", {
      name: "Un problema para pensar",
    });
    expect(problem).toHaveTextContent(
      "Un cuaderno y un lápiz cuestan juntos 5 euros",
    );
    expect(problem).toHaveTextContent("3 euros más que el lápiz");
    expect(
      screen.getByRole("button", { name: "Solicitar asistencia" }),
    ).toBeEnabled();
    expectAssistanceAbsent();
  });

  it("presenta la asistencia ante una solicitud inmediata sin elaboración previa", async () => {
    const user = userEvent.setup();
    render(<App />);

    expect(screen.getByLabelText("Introduce un texto libre")).toHaveValue("");
    expectAssistanceAbsent();
    await user.click(
      screen.getByRole("button", { name: "Solicitar asistencia" }),
    );

    expect(screen.getByRole("status")).toBeVisible();
    expect(screen.getByRole("status")).toHaveTextContent(assistanceText);
    expect(screen.getByLabelText("Introduce un texto libre")).toHaveValue("");
    expect(localStorage.length).toBe(0);
  });

  it("mantiene ausente la asistencia tras actuaciones ordinarias y permite solicitarla después", async () => {
    const user = userEvent.setup();
    localStorage.setItem("ru2m1.previous", "Aportación anterior");
    const { rerender } = render(<App />);

    expectAssistanceAbsent();
    await user.click(screen.getByText(/Un cuaderno y un lápiz cuestan/));
    expectAssistanceAbsent();
    await user.tab();
    expect(
      screen.getByRole("button", { name: "Solicitar asistencia" }),
    ).toHaveFocus();
    expectAssistanceAbsent();

    await user.type(screen.getByLabelText("Aportación actual"), "Continuar");
    expectAssistanceAbsent();
    await user.click(screen.getByRole("button", { name: "Crear" }));
    expect(screen.getByLabelText("Actuación actual")).toHaveTextContent(
      "Continuar",
    );
    expectAssistanceAbsent();

    rerender(<App />);
    expectAssistanceAbsent();

    await user.click(
      screen.getByRole("button", { name: "Solicitar asistencia" }),
    );

    expect(screen.getByRole("status")).toBeVisible();
    expect(screen.getByRole("status")).toHaveTextContent(assistanceText);
  });

  it("hace accesible R-U2-M1 desde el punto normal de entrada del producto", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: "Ahora" })).toBeInTheDocument();

    expect(screen.getByLabelText("Introduce un texto libre")).toBeInTheDocument();

    expect(screen.getByRole("button", { name: "Crear" })).toBeInTheDocument();
  });

  it("proporciona orientación situacional junto a la realización en uso", () => {
    localStorage.setItem("ru2m1.previous", "Aportación anterior");

    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: /dónde estás/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /primera realización contingente destinada al uso del proyecto/i,
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: /retomar/i,
      }),
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/aportación anterior/i)).toHaveTextContent(
      "Aportación anterior",
    );

    expect(
      screen.getByRole("textbox", {
        name: /aportación actual/i,
      }),
    ).toBeInTheDocument();
  });

  it("manifiesta sólo B1 cuando la persona constituye C1", async () => {
    const user = userEvent.setup();
    localStorage.setItem("ru2m1.previous", "Aportación anterior válida");

    render(
      <App
        resolution={FIRST_RESOLUTION}
        secondResolution={SECOND_RESOLUTION}
        thirdResolution={THIRD_RESOLUTION}
      />,
    );

    await user.type(
      screen.getByLabelText(/aportación actual/i),
      FIRST_CONTRIBUTION,
    );
    await user.click(screen.getByRole("button", { name: /^crear$/i }));

    expect(screen.getByLabelText(/actuación actual/i)).toHaveTextContent(
      FIRST_CONTRIBUTION,
    );
    expect(screen.getByText(FIRST_DIFFERENCE)).toBeInTheDocument();
    expect(screen.queryByText(SECOND_DIFFERENCE)).not.toBeInTheDocument();
    expect(screen.queryByText(THIRD_DIFFERENCE)).not.toBeInTheDocument();
  });

  it("manifiesta sólo B2 cuando la persona constituye C2", async () => {
    const user = userEvent.setup();
    localStorage.setItem("ru2m1.previous", "Aportación anterior válida");

    render(
      <App
        resolution={FIRST_RESOLUTION}
        secondResolution={SECOND_RESOLUTION}
        thirdResolution={THIRD_RESOLUTION}
      />,
    );

    await user.type(
      screen.getByLabelText(/aportación actual/i),
      SECOND_CONTRIBUTION,
    );
    await user.click(screen.getByRole("button", { name: /^crear$/i }));

    expect(screen.getByLabelText(/actuación actual/i)).toHaveTextContent(
      SECOND_CONTRIBUTION,
    );
    expect(screen.getByText(SECOND_DIFFERENCE)).toBeInTheDocument();
    expect(screen.queryByText(FIRST_DIFFERENCE)).not.toBeInTheDocument();
    expect(screen.queryByText(THIRD_DIFFERENCE)).not.toBeInTheDocument();
  });

  it("manifiesta sólo B3 cuando la persona constituye C3", async () => {
    const user = userEvent.setup();
    localStorage.setItem("ru2m1.previous", "Aportación anterior válida");

    render(
      <App
        resolution={FIRST_RESOLUTION}
        secondResolution={SECOND_RESOLUTION}
        thirdResolution={THIRD_RESOLUTION}
      />,
    );

    await user.type(
      screen.getByLabelText(/aportación actual/i),
      THIRD_CONTRIBUTION,
    );
    await user.click(screen.getByRole("button", { name: /^crear$/i }));

    expect(screen.getByLabelText(/actuación actual/i)).toHaveTextContent(
      THIRD_CONTRIBUTION,
    );
    expect(screen.getByText(THIRD_DIFFERENCE)).toBeInTheDocument();
    expect(screen.queryByText(FIRST_DIFFERENCE)).not.toBeInTheDocument();
    expect(screen.queryByText(SECOND_DIFFERENCE)).not.toBeInTheDocument();
  });

  it("no manifiesta B1, B2 ni B3 cuando la persona constituye C4", async () => {
    const user = userEvent.setup();
    const fourthContribution = "Aportación sin resolución disponible";
    localStorage.setItem("ru2m1.previous", "Aportación anterior válida");

    render(
      <App
        resolution={FIRST_RESOLUTION}
        secondResolution={SECOND_RESOLUTION}
        thirdResolution={THIRD_RESOLUTION}
      />,
    );

    await user.type(
      screen.getByLabelText(/aportación actual/i),
      fourthContribution,
    );
    await user.click(screen.getByRole("button", { name: /^crear$/i }));

    expect(screen.getByLabelText(/actuación actual/i)).toHaveTextContent(
      fourthContribution,
    );
    expect(screen.queryByText(FIRST_DIFFERENCE)).not.toBeInTheDocument();
    expect(screen.queryByText(SECOND_DIFFERENCE)).not.toBeInTheDocument();
    expect(screen.queryByText(THIRD_DIFFERENCE)).not.toBeInTheDocument();
  });

  it("conserva B1 cuando R1 ocupa la segunda posición técnica", async () => {
    const user = userEvent.setup();
    localStorage.setItem("ru2m1.previous", "Aportación anterior válida");

    render(
      <App
        resolution={THIRD_RESOLUTION}
        secondResolution={FIRST_RESOLUTION}
        thirdResolution={SECOND_RESOLUTION}
      />,
    );

    await user.type(
      screen.getByLabelText(/aportación actual/i),
      FIRST_CONTRIBUTION,
    );
    await user.click(screen.getByRole("button", { name: /^crear$/i }));

    expect(screen.getByLabelText(/actuación actual/i)).toHaveTextContent(
      FIRST_CONTRIBUTION,
    );
    expect(screen.getByText(FIRST_DIFFERENCE)).toBeInTheDocument();
    expect(screen.queryByText(SECOND_DIFFERENCE)).not.toBeInTheDocument();
    expect(screen.queryByText(THIRD_DIFFERENCE)).not.toBeInTheDocument();
  });

  it("conserva B2 cuando R2 ocupa la tercera posición técnica", async () => {
    const user = userEvent.setup();
    localStorage.setItem("ru2m1.previous", "Aportación anterior válida");

    render(
      <App
        resolution={THIRD_RESOLUTION}
        secondResolution={FIRST_RESOLUTION}
        thirdResolution={SECOND_RESOLUTION}
      />,
    );

    await user.type(
      screen.getByLabelText(/aportación actual/i),
      SECOND_CONTRIBUTION,
    );
    await user.click(screen.getByRole("button", { name: /^crear$/i }));

    expect(screen.getByLabelText(/actuación actual/i)).toHaveTextContent(
      SECOND_CONTRIBUTION,
    );
    expect(screen.getByText(SECOND_DIFFERENCE)).toBeInTheDocument();
    expect(screen.queryByText(FIRST_DIFFERENCE)).not.toBeInTheDocument();
    expect(screen.queryByText(THIRD_DIFFERENCE)).not.toBeInTheDocument();
  });

  it("conserva B3 cuando R3 ocupa la primera posición técnica", async () => {
    const user = userEvent.setup();
    localStorage.setItem("ru2m1.previous", "Aportación anterior válida");

    render(
      <App
        resolution={THIRD_RESOLUTION}
        secondResolution={FIRST_RESOLUTION}
        thirdResolution={SECOND_RESOLUTION}
      />,
    );

    await user.type(
      screen.getByLabelText(/aportación actual/i),
      THIRD_CONTRIBUTION,
    );
    await user.click(screen.getByRole("button", { name: /^crear$/i }));

    expect(screen.getByLabelText(/actuación actual/i)).toHaveTextContent(
      THIRD_CONTRIBUTION,
    );
    expect(screen.getByText(THIRD_DIFFERENCE)).toBeInTheDocument();
    expect(screen.queryByText(FIRST_DIFFERENCE)).not.toBeInTheDocument();
    expect(screen.queryByText(SECOND_DIFFERENCE)).not.toBeInTheDocument();
  });

  it("no manifiesta resolución para C4 bajo la permutación técnica", async () => {
    const user = userEvent.setup();
    const fourthContribution = "Aportación sin resolución disponible";
    localStorage.setItem("ru2m1.previous", "Aportación anterior válida");

    render(
      <App
        resolution={THIRD_RESOLUTION}
        secondResolution={FIRST_RESOLUTION}
        thirdResolution={SECOND_RESOLUTION}
      />,
    );

    await user.type(
      screen.getByLabelText(/aportación actual/i),
      fourthContribution,
    );
    await user.click(screen.getByRole("button", { name: /^crear$/i }));

    expect(screen.getByLabelText(/actuación actual/i)).toHaveTextContent(
      fourthContribution,
    );
    expect(screen.queryByText(FIRST_DIFFERENCE)).not.toBeInTheDocument();
    expect(screen.queryByText(SECOND_DIFFERENCE)).not.toBeInTheDocument();
    expect(screen.queryByText(THIRD_DIFFERENCE)).not.toBeInTheDocument();
  });
});
