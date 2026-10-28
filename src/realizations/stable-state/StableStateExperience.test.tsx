import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import { StableStateExperience } from "./StableStateExperience";

describe("StableStateExperience", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  async function constituteInitialWork(value = "R1") {
    const user = userEvent.setup();

    await user.type(
      screen.getByRole("textbox", { name: /trabajo inicial/i }),
      value,
    );

    await user.click(
      screen.getByRole("button", { name: /constituir trabajo/i }),
    );

    return user;
  }

  async function constituteStableReference() {
    const user = userEvent.setup();

    await user.click(
      screen.getByRole("button", {
        name: /conservar como referencia estable/i,
      }),
    );

    return user;
  }

  async function evolveTo(value: string) {
    const user = userEvent.setup();

    await user.type(
      screen.getByRole("textbox", { name: /evolución/i }),
      value,
    );

    await user.click(
      screen.getByRole("button", { name: /evolucionar/i }),
    );

    return user;
  }

  it("[T-P1-01] constitutes an initial current work R1", async () => {
    render(<StableStateExperience />);

    await constituteInitialWork("R1");

    expect(screen.getByLabelText("Contenido del trabajo actual")).toHaveTextContent("R1");
    expect(
      screen.queryByLabelText("Contenido de referencia estable"),
    ).not.toBeInTheDocument();
  });

  it("[T-P1-02] constitutes R1 as the stable reference S1", async () => {
    render(<StableStateExperience />);

    await constituteInitialWork("R1");
    await constituteStableReference();

    expect(
      screen.getByLabelText("Identificador de referencia"),
    ).toHaveTextContent("S1");

    expect(
      screen.getByLabelText("Contenido de referencia estable"),
    ).toHaveTextContent("R1");
  });

  it("[T-P1-03] keeps the stable reference distinguishable from current work", async () => {
    render(<StableStateExperience />);

    await constituteInitialWork("R1");
    await constituteStableReference();

    expect(screen.getByLabelText("Contenido del trabajo actual")).toHaveTextContent("R1");

    expect(
      screen.getByLabelText("Contenido de referencia estable"),
    ).toHaveTextContent("R1");

    expect(
      screen.getByRole("heading", { name: "Trabajo actual" }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "Referencia estable" }),
    ).toBeInTheDocument();
  });

  it("[T-P1-04] evolves current work from R1 to R2 after S1 exists", async () => {
    render(<StableStateExperience />);

    await constituteInitialWork("R1");
    await constituteStableReference();
    await evolveTo("R2");

    expect(screen.getByLabelText("Contenido del trabajo actual")).toHaveTextContent("R2");
  });

  it("[T-P1-05] preserves S1 unchanged after current work evolves to R2", async () => {
    render(<StableStateExperience />);

    await constituteInitialWork("R1");
    await constituteStableReference();
    await evolveTo("R2");

    expect(
      screen.getByLabelText("Contenido de referencia estable"),
    ).toHaveTextContent("R1");

    expect(
      screen.getByLabelText("Contenido de referencia estable"),
    ).not.toHaveTextContent("R2");
  });

  it("[T-P1-06] preserves S1 while current work evolves from R2 to R3", async () => {
    render(<StableStateExperience />);

    await constituteInitialWork("R1");
    await constituteStableReference();
    await evolveTo("R2");
    await evolveTo("R3");

    expect(screen.getByLabelText("Contenido del trabajo actual")).toHaveTextContent("R3");

    expect(
      screen.getByLabelText("Contenido de referencia estable"),
    ).toHaveTextContent("R1");
  });

  it("[T-P1-07] restores current and stable independently after remount", async () => {
    const firstExecution = render(<StableStateExperience />);

    await constituteInitialWork("R1");
    await constituteStableReference();
    await evolveTo("R2");
    await evolveTo("R3");

    firstExecution.unmount();

    render(<StableStateExperience />);

    expect(screen.getByLabelText("Contenido del trabajo actual")).toHaveTextContent("R3");

    expect(
      screen.getByLabelText("Identificador de referencia"),
    ).toHaveTextContent("S1");

    expect(
      screen.getByLabelText("Contenido de referencia estable"),
    ).toHaveTextContent("R1");
  });

  it("[T-P1-08] exercises the complete stable-state trajectory", async () => {
    const firstExecution = render(<StableStateExperience />);

    await constituteInitialWork("Texto A");

    expect(screen.getByLabelText("Contenido del trabajo actual")).toHaveTextContent(
      "Texto A",
    );

    await constituteStableReference();

    expect(
      screen.getByLabelText("Contenido de referencia estable"),
    ).toHaveTextContent("Texto A");

    await evolveTo("Texto B");

    expect(screen.getByLabelText("Contenido del trabajo actual")).toHaveTextContent(
      "Texto B",
    );

    expect(
      screen.getByLabelText("Contenido de referencia estable"),
    ).toHaveTextContent("Texto A");

    await evolveTo("Texto C");

    expect(screen.getByLabelText("Contenido del trabajo actual")).toHaveTextContent(
      "Texto C",
    );

    expect(
      screen.getByLabelText("Contenido de referencia estable"),
    ).toHaveTextContent("Texto A");

    firstExecution.unmount();

    render(<StableStateExperience />);

    expect(screen.getByLabelText("Contenido del trabajo actual")).toHaveTextContent(
      "Texto C",
    );

    expect(
      screen.getByLabelText("Contenido de referencia estable"),
    ).toHaveTextContent("Texto A");

    expect(
      screen.getByRole("button", {
        name: /conservar como referencia estable/i,
      }),
    ).toBeDisabled();
  });
});
