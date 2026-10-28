import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { SelectiveLocalizationExperiment } from "./SelectiveLocalizationExperiment";

const need =
  "Necesito volver a considerar el material anterior que desarrollaba el argumento γ.";

const candidateCContent =
  "Un material anterior que desarrolla el argumento γ necesario para reconsiderar la cuestión actual.";

describe("SelectiveLocalizationExperiment", () => {
  it("[T-IE-01] starts S+ without exposing or preselecting C", async () => {
    const user = userEvent.setup();

    render(<SelectiveLocalizationExperiment />);

    await user.click(
      screen.getByRole("button", { name: /iniciar condición positiva/i }),
    );

    expect(screen.getByText(need, { exact: true })).toBeInTheDocument();

    expect(
      screen.queryByText(candidateCContent, { exact: true }),
    ).not.toBeInTheDocument();

    expect(
      screen.queryByText(/material considerado:/i),
    ).not.toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /examinar materiales previos/i }),
    ).toBeEnabled();
  });

  it("[T-IE-02] makes A-D inspectable after activating IE-03 in S+", async () => {
    const user = userEvent.setup();

    render(<SelectiveLocalizationExperiment />);

    await user.click(
      screen.getByRole("button", { name: /iniciar condición positiva/i }),
    );

    await user.click(
      screen.getByRole("button", { name: /examinar materiales previos/i }),
    );

    expect(screen.getByText("Material A", { exact: true })).toBeInTheDocument();
    expect(screen.getByText("Material B", { exact: true })).toBeInTheDocument();
    expect(screen.getByText("Material C", { exact: true })).toBeInTheDocument();
    expect(screen.getByText("Material D", { exact: true })).toBeInTheDocument();
  });

  it("[T-IE-03] keeps all candidates selectable and does not select C automatically", async () => {
    const user = userEvent.setup();

    render(<SelectiveLocalizationExperiment />);

    await user.click(
      screen.getByRole("button", { name: /iniciar condición positiva/i }),
    );

    await user.click(
      screen.getByRole("button", { name: /examinar materiales previos/i }),
    );

    expect(
      screen.queryByText(/material considerado:/i),
    ).not.toBeInTheDocument();

    for (const id of ["A", "B", "C", "D"]) {
      expect(
        screen.getByRole("button", { name: `Considerar ${id}` }),
      ).toBeEnabled();
    }

    await user.click(screen.getByRole("button", { name: "Considerar A" }));

    expect(
      screen.getByText("Material considerado: A", { exact: true }),
    ).toBeInTheDocument();
  });

  it("[T-IE-04] preserves P in S− without exposing IE-03 or inspectable candidates", async () => {
    const user = userEvent.setup();

    render(<SelectiveLocalizationExperiment />);

    await user.click(
      screen.getByRole("button", { name: /iniciar condición negativa/i }),
    );

    expect(screen.getByText(need, { exact: true })).toBeInTheDocument();

    expect(
      screen.queryByRole("button", { name: /examinar materiales previos/i }),
    ).not.toBeInTheDocument();

    expect(
      screen.queryByRole("button", { name: /considerar [abcd]/i }),
    ).not.toBeInTheDocument();

    expect(
      screen.queryByText(candidateCContent, { exact: true }),
    ).not.toBeInTheDocument();
  });

  it("[T-IE-05] provides C directly in S−R without using IE-03", async () => {
    const user = userEvent.setup();

    render(<SelectiveLocalizationExperiment />);

    await user.click(
      screen.getByRole("button", { name: /iniciar condición negativa/i }),
    );

    expect(
      screen.queryByRole("button", { name: /examinar materiales previos/i }),
    ).not.toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: /proporcionar material de control/i }),
    );

    expect(
      screen.getByText("Material proporcionado directamente:", {
        exact: true,
      }),
    ).toBeInTheDocument();

    expect(screen.getByText("Material C", { exact: true })).toBeInTheDocument();

    expect(
      screen.getByText(/Un material anterior que desarrolla el argumento γ/i),
    ).toBeInTheDocument();
  });

  it("[T-IE-06] exposes the same C content in setup, S+, and S−R", async () => {
    const user = userEvent.setup();

    const setupRender = render(<SelectiveLocalizationExperiment />);

    expect(
      screen.getByText(/Un material anterior que desarrolla el argumento γ/i),
    ).toBeInTheDocument();

    setupRender.unmount();

    const positiveRender = render(<SelectiveLocalizationExperiment />);

    await user.click(
      screen.getByRole("button", { name: /iniciar condición positiva/i }),
    );

    await user.click(
      screen.getByRole("button", { name: /examinar materiales previos/i }),
    );

    expect(
      screen.getByText(/Un material anterior que desarrolla el argumento γ/i),
    ).toBeInTheDocument();

    positiveRender.unmount();

    render(<SelectiveLocalizationExperiment />);

    await user.click(
      screen.getByRole("button", { name: /iniciar condición negativa/i }),
    );

    await user.click(
      screen.getByRole("button", { name: /proporcionar material de control/i }),
    );

    expect(
      screen.getByText(/Un material anterior que desarrolla el argumento γ/i),
    ).toBeInTheDocument();
  });
});
