import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

const CONTRIBUTION =
  "PV-003 dispone de un witness realizativo ejecutable local dentro de R-U2-M1.";
const DIFFERENCE =
  "La suficiencia local de la misma experiencia no proporciona fundamento para derivar una realización autónoma para este witness.";
const RESOLUTION = {
  contribution: CONTRIBUTION,
  kind: "difference" as const,
  content: DIFFERENCE,
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

  it("conduce una resolución hasta la aportación correspondiente", async () => {
    const user = userEvent.setup();
    localStorage.setItem("ru2m1.previous", "Aportación anterior válida");

    render(<App resolution={RESOLUTION} />);

    await user.type(screen.getByLabelText(/aportación actual/i), CONTRIBUTION);
    await user.click(screen.getByRole("button", { name: /^crear$/i }));

    expect(screen.getByLabelText(/actuación actual/i)).toHaveTextContent(
      CONTRIBUTION,
    );
    expect(screen.getByText(DIFFERENCE)).toBeInTheDocument();
  });

  it("no manifiesta la resolución para una aportación distinta", async () => {
    const user = userEvent.setup();
    const differentContribution = "Otra aportación constituida normalmente";
    localStorage.setItem("ru2m1.previous", "Aportación anterior válida");

    render(<App resolution={RESOLUTION} />);

    await user.type(
      screen.getByLabelText(/aportación actual/i),
      differentContribution,
    );
    await user.click(screen.getByRole("button", { name: /^crear$/i }));

    expect(screen.getByLabelText(/actuación actual/i)).toHaveTextContent(
      differentContribution,
    );
    expect(screen.queryByText(DIFFERENCE)).not.toBeInTheDocument();
  });
});
