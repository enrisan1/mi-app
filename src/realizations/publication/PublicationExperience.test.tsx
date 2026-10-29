import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import { PublicationExperience } from "./PublicationExperience";

describe("PublicationExperience", () => {
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
  }

  async function constituteStableReference() {
    const user = userEvent.setup();

    await user.click(
      screen.getByRole("button", {
        name: /conservar como referencia estable/i,
      }),
    );
  }

  async function publishStableReference() {
    const user = userEvent.setup();

    await user.click(
      screen.getByRole("button", {
        name: /publicar referencia estable/i,
      }),
    );
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
  }

  it("[T-P2-01] starts publication from an existing stable reference S1", async () => {
    render(<PublicationExperience />);

    await constituteInitialWork("R1");
    await constituteStableReference();

    expect(
      screen.getByLabelText("Identificador de referencia estable"),
    ).toHaveTextContent("S1");

    expect(
      screen.getByLabelText("Contenido de referencia estable"),
    ).toHaveTextContent("R1");

    expect(
      screen.queryByLabelText("Contenido de estado publicado"),
    ).not.toBeInTheDocument();
  });

  it("[T-P2-02] explicitly publishes S1 as P1", async () => {
    render(<PublicationExperience />);

    await constituteInitialWork("R1");
    await constituteStableReference();
    await publishStableReference();

    expect(
      screen.getByLabelText("Identificador de estado publicado"),
    ).toHaveTextContent("P1");

    expect(
      screen.getByLabelText("Contenido de estado publicado"),
    ).toHaveTextContent("R1");
  });

  it("[T-P2-03] keeps stable reference and published state distinguishable", async () => {
    render(<PublicationExperience />);

    await constituteInitialWork("R1");
    await constituteStableReference();
    await publishStableReference();

    expect(
      screen.getByRole("heading", { name: "Referencia estable" }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "Estado publicado" }),
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText("Identificador de referencia estable"),
    ).toHaveTextContent("S1");

    expect(
      screen.getByLabelText("Identificador de estado publicado"),
    ).toHaveTextContent("P1");
  });

  it("[T-P2-04] allows current work to continue after publication", async () => {
    render(<PublicationExperience />);

    await constituteInitialWork("R1");
    await constituteStableReference();
    await publishStableReference();
    await evolveTo("R2");

    expect(
      screen.getByLabelText("Contenido del trabajo actual"),
    ).toHaveTextContent("R2");
  });

  it("[T-P2-05] preserves P1 unchanged after current evolves to R2", async () => {
    render(<PublicationExperience />);

    await constituteInitialWork("R1");
    await constituteStableReference();
    await publishStableReference();
    await evolveTo("R2");

    expect(
      screen.getByLabelText("Contenido de estado publicado"),
    ).toHaveTextContent("R1");

    expect(
      screen.getByLabelText("Contenido de estado publicado"),
    ).not.toHaveTextContent("R2");
  });

  it("[T-P2-06] preserves P1 unchanged after current evolves to R3", async () => {
    render(<PublicationExperience />);

    await constituteInitialWork("R1");
    await constituteStableReference();
    await publishStableReference();
    await evolveTo("R2");
    await evolveTo("R3");

    expect(
      screen.getByLabelText("Contenido del trabajo actual"),
    ).toHaveTextContent("R3");

    expect(
      screen.getByLabelText("Contenido de estado publicado"),
    ).toHaveTextContent("R1");
  });

  it("[T-P2-07] restores current, stable, and published independently after remount", async () => {
    const firstExecution = render(<PublicationExperience />);

    await constituteInitialWork("R1");
    await constituteStableReference();
    await publishStableReference();
    await evolveTo("R2");
    await evolveTo("R3");

    firstExecution.unmount();

    render(<PublicationExperience />);

    expect(
      screen.getByLabelText("Contenido del trabajo actual"),
    ).toHaveTextContent("R3");

    expect(
      screen.getByLabelText("Identificador de referencia estable"),
    ).toHaveTextContent("S1");

    expect(
      screen.getByLabelText("Contenido de referencia estable"),
    ).toHaveTextContent("R1");

    expect(
      screen.getByLabelText("Identificador de estado publicado"),
    ).toHaveTextContent("P1");

    expect(
      screen.getByLabelText("Contenido de estado publicado"),
    ).toHaveTextContent("R1");
  });

  it("[T-P2-08] exercises the complete publication trajectory", async () => {
    const firstExecution = render(<PublicationExperience />);

    await constituteInitialWork("Texto A");

    await constituteStableReference();

    expect(
      screen.getByLabelText("Contenido de referencia estable"),
    ).toHaveTextContent("Texto A");

    await publishStableReference();

    expect(
      screen.getByLabelText("Contenido de estado publicado"),
    ).toHaveTextContent("Texto A");

    await evolveTo("Texto B");

    expect(
      screen.getByLabelText("Contenido del trabajo actual"),
    ).toHaveTextContent("Texto B");

    expect(
      screen.getByLabelText("Contenido de estado publicado"),
    ).toHaveTextContent("Texto A");

    await evolveTo("Texto C");

    expect(
      screen.getByLabelText("Contenido del trabajo actual"),
    ).toHaveTextContent("Texto C");

    expect(
      screen.getByLabelText("Contenido de referencia estable"),
    ).toHaveTextContent("Texto A");

    expect(
      screen.getByLabelText("Contenido de estado publicado"),
    ).toHaveTextContent("Texto A");

    firstExecution.unmount();

    render(<PublicationExperience />);

    expect(
      screen.getByLabelText("Contenido del trabajo actual"),
    ).toHaveTextContent("Texto C");

    expect(
      screen.getByLabelText("Contenido de referencia estable"),
    ).toHaveTextContent("Texto A");

    expect(
      screen.getByLabelText("Contenido de estado publicado"),
    ).toHaveTextContent("Texto A");

    expect(
      screen.getByRole("button", {
        name: /publicar referencia estable/i,
      }),
    ).toBeDisabled();
  });
});
