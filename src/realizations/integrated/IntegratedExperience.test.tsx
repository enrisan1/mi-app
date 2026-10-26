import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import { IntegratedExperience } from "./IntegratedExperience";

describe("IntegratedExperience", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  async function constituteFirstWork() {
    const user = userEvent.setup();

    await user.type(
      screen.getByRole("textbox", { name: /primer trabajo/i }),
      "Y1-IR-01",
    );

    await user.click(
      screen.getByRole("button", { name: /crear primer trabajo/i }),
    );
  }

  it("[RED-IR-01] evolves the current work without replacing its antecedent", async () => {
    const user = userEvent.setup();

    render(<IntegratedExperience />);

    await constituteFirstWork();

    expect(
      screen.getByText("X-IR-01", { exact: true }),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Y1-IR-01", { exact: true }),
    ).toBeInTheDocument();

    const input = screen.getByRole("textbox", {
      name: /evolución/i,
    });

    await user.type(input, "Y2-IR-01");

    await user.click(
      screen.getByRole("button", {
        name: /evolucionar/i,
      }),
    );

    expect(
      screen.getByText("X-IR-01", { exact: true }),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Y2-IR-01", { exact: true }),
    ).toBeInTheDocument();

    expect(
      screen.queryByText("Y1-IR-01", { exact: true }),
    ).not.toBeInTheDocument();
  });

  it("[RED-IR-02] leaves the relevant decision open to the person", async () => {
    const user = userEvent.setup();

    render(<IntegratedExperience />);

    await constituteFirstWork();

    expect(
      screen.getByRole("button", {
        name: /evolucionar/i,
      }),
    ).toBeEnabled();

    expect(
      screen.getByRole("button", {
        name: /considerar suficiente/i,
      }),
    ).toBeEnabled();

    await user.click(
      screen.getByRole("button", {
        name: /considerar suficiente/i,
      }),
    );

    expect(screen.getByRole("status")).toHaveTextContent(
      /trabajo actual.*suficiente/i,
    );

    expect(
      screen.getByText("Y1-IR-01", { exact: true }),
    ).toBeInTheDocument();
  });


  it("[RED-IR-03] recovers the evolved work after a real remount", async () => {
    const user = userEvent.setup();

    const firstExecution = render(<IntegratedExperience />);

    await constituteFirstWork();

    const input = screen.getByRole("textbox", {
      name: /evolución/i,
    });

    await user.type(input, "Y2-IR-01");

    await user.click(
      screen.getByRole("button", {
        name: /evolucionar/i,
      }),
    );

    expect(
      screen.getByText("Y2-IR-01", { exact: true }),
    ).toBeInTheDocument();

    firstExecution.unmount();

    render(<IntegratedExperience />);

    expect(
      screen.getByText("X-IR-01", { exact: true }),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Y2-IR-01", { exact: true }),
    ).toBeInTheDocument();

    expect(
      screen.queryByText("Y1-IR-01", { exact: true }),
    ).not.toBeInTheDocument();
  });


  it("[IR-04] continues operationally from the recovered work", async () => {
    const user = userEvent.setup();

    const firstExecution = render(<IntegratedExperience />);

    await constituteFirstWork();

    await user.type(
      screen.getByRole("textbox", { name: /evolución/i }),
      "Y2-IR-01",
    );

    await user.click(
      screen.getByRole("button", { name: /evolucionar/i }),
    );

    firstExecution.unmount();

    render(<IntegratedExperience />);

    expect(
      screen.getByText("Y2-IR-01", { exact: true }),
    ).toBeInTheDocument();

    await user.type(
      screen.getByRole("textbox", { name: /evolución/i }),
      "Y3-IR-01",
    );

    await user.click(
      screen.getByRole("button", { name: /evolucionar/i }),
    );

    expect(
      screen.getByText("X-IR-01", { exact: true }),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Y3-IR-01", { exact: true }),
    ).toBeInTheDocument();

    expect(
      screen.queryByText("Y2-IR-01", { exact: true }),
    ).not.toBeInTheDocument();
  });


  it("[RED-IR-05] constitutes new work from the current work without replacing it", async () => {
    const user = userEvent.setup();

    render(<IntegratedExperience />);

    await constituteFirstWork();

    expect(
      screen.getByText("X-IR-01", { exact: true }),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Y1-IR-01", { exact: true }),
    ).toBeInTheDocument();

    const reuseInput = screen.getByRole("textbox", {
      name: /nuevo trabajo/i,
    });

    await user.type(reuseInput, "Z-IR-01");

    expect(
      screen.queryByLabelText(/nuevo trabajo constituido/i),
    ).not.toBeInTheDocument();

    await user.click(
      screen.getByRole("button", {
        name: /reutilizar/i,
      }),
    );

    expect(
      screen.getByText("X-IR-01", { exact: true }),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Y1-IR-01", { exact: true }),
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(/nuevo trabajo constituido/i),
    ).toHaveTextContent("Z-IR-01");
  });


  it("[RED-IR-06] starts from the antecedent and constitutes the first work from it", async () => {
    const user = userEvent.setup();

    render(<IntegratedExperience />);

    expect(
      screen.getByText("X-IR-01", { exact: true }),
    ).toBeInTheDocument();

    expect(
      screen.queryByText("Y1-IR-01", { exact: true }),
    ).not.toBeInTheDocument();

    const input = screen.getByRole("textbox", {
      name: /primer trabajo/i,
    });

    await user.type(input, "Y1-IR-01");

    await user.click(
      screen.getByRole("button", {
        name: /crear primer trabajo/i,
      }),
    );

    expect(
      screen.getByText("X-IR-01", { exact: true }),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Y1-IR-01", { exact: true }),
    ).toBeInTheDocument();
  });


  it("[IR-INTEGRATION-01] exercises the complete integrated trajectory", async () => {
    const user = userEvent.setup();

    // H0 — existe X y todavía no existe Y.
    const firstExecution = render(<IntegratedExperience />);

    expect(
      screen.getByText("X-IR-01", { exact: true }),
    ).toBeInTheDocument();

    expect(
      screen.queryByText("Y1-IR-01", { exact: true }),
    ).not.toBeInTheDocument();

    // H1 — constituir Y1 desde X.
    await user.type(
      screen.getByRole("textbox", { name: /primer trabajo/i }),
      "Y1-IR-01",
    );

    await user.click(
      screen.getByRole("button", { name: /crear primer trabajo/i }),
    );

    expect(
      screen.getByText("X-IR-01", { exact: true }),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Y1-IR-01", { exact: true }),
    ).toBeInTheDocument();

    // H2 — evolucionar el mismo trabajo conservando X.
    await user.type(
      screen.getByRole("textbox", { name: /evolución/i }),
      "Y2-IR-01",
    );

    await user.click(
      screen.getByRole("button", { name: /evolucionar/i }),
    );

    expect(
      screen.getByText("X-IR-01", { exact: true }),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Y2-IR-01", { exact: true }),
    ).toBeInTheDocument();

    expect(
      screen.queryByText("Y1-IR-01", { exact: true }),
    ).not.toBeInTheDocument();

    // H3 — la persona resuelve la decisión.
    await user.click(
      screen.getByRole("button", {
        name: /considerar suficiente/i,
      }),
    );

    expect(screen.getByRole("status")).toHaveTextContent(
      /trabajo actual.*suficiente/i,
    );

    // H4 — estado mínimo fijado antes de la interrupción.
    expect(
      screen.getByText("X-IR-01", { exact: true }),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Y2-IR-01", { exact: true }),
    ).toBeInTheDocument();

    // Interrupción técnica.
    firstExecution.unmount();

    // H5 — recuperación.
    render(<IntegratedExperience />);

    expect(
      screen.getByText("X-IR-01", { exact: true }),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Y2-IR-01", { exact: true }),
    ).toBeInTheDocument();

    // H6 — actuación nueva sobre lo recuperado.
    await user.type(
      screen.getByRole("textbox", { name: /evolución/i }),
      "Y3-IR-01",
    );

    await user.click(
      screen.getByRole("button", { name: /evolucionar/i }),
    );

    expect(
      screen.getByText("X-IR-01", { exact: true }),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Y3-IR-01", { exact: true }),
    ).toBeInTheDocument();

    // H7 — reutilizar Y actual para constituir Z sin reemplazarlo.
    const reuseInput = screen.getByRole("textbox", {
      name: /nuevo trabajo/i,
    });

    await user.type(reuseInput, "Z-IR-01");

    expect(
      screen.queryByLabelText(/nuevo trabajo constituido/i),
    ).not.toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: /reutilizar/i }),
    );

    expect(
      screen.getByText("X-IR-01", { exact: true }),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Y3-IR-01", { exact: true }),
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(/nuevo trabajo constituido/i),
    ).toHaveTextContent("Z-IR-01");
  });


  it("[RED-IR-07] invalidates the sufficiency decision when the work evolves", async () => {
    const user = userEvent.setup();

    render(<IntegratedExperience />);

    await constituteFirstWork();

    await user.click(
      screen.getByRole("button", {
        name: /considerar suficiente/i,
      }),
    );

    expect(screen.getByRole("status")).toHaveTextContent(
      /trabajo actual.*suficiente/i,
    );

    await user.type(
      screen.getByRole("textbox", { name: /evolución/i }),
      "Y2-IR-01",
    );

    await user.click(
      screen.getByRole("button", {
        name: /evolucionar/i,
      }),
    );

    expect(
      screen.getByText("Y2-IR-01", { exact: true }),
    ).toBeInTheDocument();

    expect(
      screen.queryByRole("status"),
    ).not.toBeInTheDocument();
  });


  it("[RED-IR-08] invalidates the constituted reuse when its antecedent evolves", async () => {
    const user = userEvent.setup();

    render(<IntegratedExperience />);

    await constituteFirstWork();

    await user.type(
      screen.getByRole("textbox", { name: /nuevo trabajo/i }),
      "Z-IR-01",
    );

    await user.click(
      screen.getByRole("button", { name: /reutilizar/i }),
    );

    expect(
      screen.getByLabelText(/nuevo trabajo constituido/i),
    ).toHaveTextContent("Z-IR-01");

    await user.type(
      screen.getByRole("textbox", { name: /evolución/i }),
      "Y2-IR-01",
    );

    await user.click(
      screen.getByRole("button", { name: /evolucionar/i }),
    );

    expect(
      screen.getByText("Y2-IR-01", { exact: true }),
    ).toBeInTheDocument();

    expect(
      screen.queryByLabelText(/nuevo trabajo constituido/i),
    ).not.toBeInTheDocument();
  });

});
