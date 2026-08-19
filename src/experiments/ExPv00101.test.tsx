import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ExPv00101 from "./ExPv00101";

const contribution = "La llave está en el cajón.";
const secondSituation = "Necesitas encontrar la llave.";

function introduceContribution() {
  fireEvent.click(
    screen.getByRole("button", { name: "Introducir A" }),
  );
}

function finishFirstSituation() {
  fireEvent.click(
    screen.getByRole("button", { name: "Finalizar S1" }),
  );
}

function reachSecondSituation(condition: "E+" | "E−") {
  const result = render(<ExPv00101 condition={condition} />);

  introduceContribution();
  finishFirstSituation();

  return result;
}

describe("EX-PV001-01", () => {
  it("T-EX001-01 comienza en S1 y permite introducir A y finalizar S1", () => {
    render(<ExPv00101 condition="E+" />);

    expect(
      screen.getByRole("heading", { name: "S1" }),
    ).toBeInTheDocument();
    expect(screen.getByText(contribution)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Finalizar S1" }),
    ).toBeDisabled();
    expect(
      screen.queryByRole("heading", { name: "S2" }),
    ).not.toBeInTheDocument();

    introduceContribution();

    expect(
      screen.getByRole("button", { name: "Finalizar S1" }),
    ).toBeEnabled();
    expect(
      screen.getByRole("heading", { name: "S1" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "S2" }),
    ).not.toBeInTheDocument();
  });

  it("T-EX001-02 conserva A al finalizar S1 y activa S2", () => {
    reachSecondSituation("E+");

    expect(
      screen.queryByRole("heading", { name: "S1" }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "S2" }),
    ).toBeInTheDocument();
    expect(screen.getByText(contribution)).toBeInTheDocument();
  });

  it("T-EX001-03 pone A a disposición en S2 bajo E+", () => {
    reachSecondSituation("E+");

    expect(screen.getByText(secondSituation)).toBeInTheDocument();
    expect(screen.getByText(contribution)).toBeInTheDocument();
  });

  it("T-EX001-04 no pone A a disposición en S2 bajo E−", () => {
    reachSecondSituation("E−");

    expect(screen.getByText(secondSituation)).toBeInTheDocument();
    expect(screen.queryByText(contribution)).not.toBeInTheDocument();
  });

  it("T-EX001-05 solo diferencia E+ y E− por la disponibilidad de A", () => {
    const positive = reachSecondSituation("E+");
    const contributionMarkup = `<p>${contribution}</p>`;
    const positiveWithoutContribution =
      positive.container.innerHTML.replace(contributionMarkup, "");

    positive.unmount();

    const negative = reachSecondSituation("E−");

    expect(negative.container.innerHTML).toBe(
      positiveWithoutContribution,
    );
  });

  it("T-EX001-06 finaliza S1 sin interacción posterior en S2", () => {
    render(<ExPv00101 condition="E+" />);
    introduceContribution();

    expect(
      screen.queryByRole("heading", { name: "S2" }),
    ).not.toBeInTheDocument();

    finishFirstSituation();

    expect(
      screen.getByRole("heading", { name: "S2" }),
    ).toBeInTheDocument();
  });
});
