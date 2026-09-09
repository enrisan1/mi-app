import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

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
});
