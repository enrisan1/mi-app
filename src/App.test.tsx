import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("hace accesible R-U2-M1 desde el punto normal de entrada del producto", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: "Ahora" }),
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText("Aportación actual"),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Terminar por ahora" }),
    ).toBeInTheDocument();
  });
});
