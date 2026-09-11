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

describe("App", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("hace accesible R-U2-M1 desde el punto normal de entrada del producto", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: "Ahora" })).toBeInTheDocument();

    expect(screen.getByLabelText("Aportación actual")).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Terminar por ahora" }),
    ).toBeInTheDocument();
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
  });

  it("manifiesta sólo B2 cuando la persona constituye C2", async () => {
    const user = userEvent.setup();
    localStorage.setItem("ru2m1.previous", "Aportación anterior válida");

    render(
      <App
        resolution={FIRST_RESOLUTION}
        secondResolution={SECOND_RESOLUTION}
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
  });

  it("no manifiesta B1 ni B2 cuando la persona constituye C3", async () => {
    const user = userEvent.setup();
    const thirdContribution = "Aportación sin resolución disponible";
    localStorage.setItem("ru2m1.previous", "Aportación anterior válida");

    render(
      <App
        resolution={FIRST_RESOLUTION}
        secondResolution={SECOND_RESOLUTION}
      />,
    );

    await user.type(
      screen.getByLabelText(/aportación actual/i),
      thirdContribution,
    );
    await user.click(screen.getByRole("button", { name: /^crear$/i }));

    expect(screen.getByLabelText(/actuación actual/i)).toHaveTextContent(
      thirdContribution,
    );
    expect(screen.queryByText(FIRST_DIFFERENCE)).not.toBeInTheDocument();
    expect(screen.queryByText(SECOND_DIFFERENCE)).not.toBeInTheDocument();
  });
});
