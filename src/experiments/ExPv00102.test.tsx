import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import ExPv00102, {
  a0,
  a1,
  aControl,
  x1,
  x2,
  x3,
  X,
  out,
  sameOut,
  isTerminal,
  completesStruct,
  dispW,
  type ARef,
  type GGamma,
  type XRef,
} from "./ExPv00102";

const gGamma: GGamma = new Map<ARef, XRef>([
  [a0, x1],
  [a1, x2],
  [aControl, x3],
]);

function introduceContribution() {
  fireEvent.click(screen.getByRole("button", { name: "Introducir A" }));
}

function finishFirstSituation() {
  fireEvent.click(screen.getByRole("button", { name: "Finalizar S1" }));
}

describe("EX-PV001-02", () => {
  it("T-EX002-01 X contiene tres referentes distintos", () => {
    expect(X).toHaveLength(3);

    expect(x1).not.toBe(x2);
    expect(x1).not.toBe(x3);
    expect(x2).not.toBe(x3);
  });

  it("T-EX002-02 una g_Γ suministrada externamente permite obtener x al introducir A", () => {
    render(
      <ExPv00102
        aRef={a0}
        gGamma={gGamma}
        terminalX={x1}
        partPossibleH={true}
      />,
    );

    expect(screen.getByRole("button", { name: "Finalizar S1" })).toBeDisabled();

    introduceContribution();

    expect(screen.getByRole("button", { name: "Finalizar S1" })).toBeEnabled();
  });

  it("T-EX002-03 S2 no puede alcanzarse antes de haber obtenido x", () => {
    render(
      <ExPv00102
        aRef={a0}
        gGamma={gGamma}
        terminalX={x1}
        partPossibleH={true}
      />,
    );
    expect(
      screen.queryByRole("heading", { name: "S2" }),
    ).not.toBeInTheDocument();

    expect(screen.getByRole("button", { name: "Finalizar S1" })).toBeDisabled();

    introduceContribution();
    finishFirstSituation();

    expect(screen.getByRole("heading", { name: "S2" })).toBeInTheDocument();
  });

  it("T-EX002-04 Out conserva la identidad de un mismo x", () => {
    const first = out(x1);
    const second = out(x1);

    expect(sameOut(first, second)).toBe(true);
  });

  it("T-EX002-05 Out conserva la discriminación entre x distintos", () => {
    expect(sameOut(out(x1), out(x2))).toBe(false);
    expect(sameOut(out(x1), out(x3))).toBe(false);
    expect(sameOut(out(x2), out(x3))).toBe(false);
  });

  it("T-EX002-06 CR-Term reconoce únicamente el Out del xᵗ suministrado", () => {
    const terminalX: XRef = x1;

    expect(isTerminal(out(x1), terminalX)).toBe(true);
    expect(isTerminal(out(x2), terminalX)).toBe(false);
    expect(isTerminal(out(x3), terminalX)).toBe(false);
  });

  it("T-EX002-07 dos x distintos pueden compartir clasificación no terminal", () => {
    const terminalX: XRef = x1;

    expect(x2).not.toBe(x3);

    expect(isTerminal(out(x2), terminalX)).toBe(false);
    expect(isTerminal(out(x3), terminalX)).toBe(false);
  });

  it("T-EX002-08 CompletesStruct es verdadero cuando la continuación única satisface CR-Term", () => {
    const terminalX: XRef = x1;

    expect(completesStruct(out(x1), terminalX)).toBe(true);
  });

  it("T-EX002-09 CompletesStruct es falso cuando la continuación única no satisface CR-Term", () => {
    const terminalX: XRef = x1;

    expect(completesStruct(out(x2), terminalX)).toBe(false);
  });

  it("T-EX002-10 dos x distintos pueden conservar el mismo valor falso de CompletesStruct", () => {
    const terminalX: XRef = x1;

    expect(x2).not.toBe(x3);

    expect(completesStruct(out(x2), terminalX)).toBe(false);

    expect(completesStruct(out(x3), terminalX)).toBe(false);
  });

  it("T-EX002-11 S2 expone exactamente el Out(x) derivado por g_Γ", () => {
    render(
      <ExPv00102
        aRef={a1}
        gGamma={gGamma}
        terminalX={x1}
        partPossibleH={true}
      />,
    );

    introduceContribution();
    finishFirstSituation();

    expect(screen.getByTestId("outcome")).toHaveTextContent("x2");
  });

  it("T-EX002-12 S2 no ofrece nueva entrada ni elección después de la continuación", () => {
    render(
      <ExPv00102
        aRef={a0}
        gGamma={gGamma}
        terminalX={x1}
        partPossibleH={true}
      />,
    );

    introduceContribution();
    finishFirstSituation();

    expect(screen.getByRole("heading", { name: "S2" })).toBeInTheDocument();

    expect(screen.queryByRole("button")).not.toBeInTheDocument();

    expect(screen.queryByRole("textbox")).not.toBeInTheDocument();

    expect(screen.queryByRole("combobox")).not.toBeInTheDocument();
  });

  it("T-EX002-13 S2 calcula CR-Term y CompletesStruct verdaderos para el xᵗ suministrado", () => {
    render(
      <ExPv00102
        aRef={a0}
        gGamma={gGamma}
        terminalX={x1}
        partPossibleH={true}
      />,
    );

    introduceContribution();
    finishFirstSituation();

    expect(screen.getByTestId("cr-term")).toHaveTextContent("true");

    expect(screen.getByTestId("completes-struct")).toHaveTextContent("true");
  });

  it("T-EX002-14 S2 calcula CR-Term y CompletesStruct falsos para un x distinto de xᵗ", () => {
    render(
      <ExPv00102
        aRef={a1}
        gGamma={gGamma}
        terminalX={x1}
        partPossibleH={true}
      />,
    );

    introduceContribution();
    finishFirstSituation();

    expect(screen.getByTestId("cr-term")).toHaveTextContent("false");

    expect(screen.getByTestId("completes-struct")).toHaveTextContent("false");
  });

  it("T-EX002-15 dos x distintos pueden producir el mismo CompletesStruct=false en S2", () => {
    const first = render(
      <ExPv00102
        aRef={a1}
        gGamma={gGamma}
        terminalX={x1}
        partPossibleH={true}
      />,
    );

    introduceContribution();
    finishFirstSituation();

    expect(screen.getByTestId("outcome")).toHaveTextContent("x2");

    expect(screen.getByTestId("completes-struct")).toHaveTextContent("false");

    first.unmount();

    render(
      <ExPv00102
        aRef={aControl}
        gGamma={gGamma}
        terminalX={x1}
        partPossibleH={true}
      />,
    );

    introduceContribution();
    finishFirstSituation();

    expect(screen.getByTestId("outcome")).toHaveTextContent("x3");

    expect(screen.getByTestId("completes-struct")).toHaveTextContent("false");
  });

  it("T-EX002-16 PartPossible_h permanece true para los tres referentes de X", () => {
    const cases: ARef[] = [a0, a1, aControl];

    for (const aRef of cases) {
      const result = render(
        <ExPv00102
          aRef={aRef}
          gGamma={gGamma}
          terminalX={x1}
          partPossibleH={true}
        />,
      );

      introduceContribution();
      finishFirstSituation();

      expect(screen.getByTestId("part-possible-h")).toHaveTextContent("true");

      result.unmount();
    }
  });

  it("T-EX002-17 PartPossible_h permanece true tanto con CompletesStruct=true como con CompletesStruct=false", () => {
    const positive = render(
      <ExPv00102
        aRef={a0}
        gGamma={gGamma}
        terminalX={x1}
        partPossibleH={true}
      />,
    );

    introduceContribution();
    finishFirstSituation();

    expect(screen.getByTestId("completes-struct")).toHaveTextContent("true");

    expect(screen.getByTestId("part-possible-h")).toHaveTextContent("true");

    positive.unmount();

    render(
      <ExPv00102
        aRef={a1}
        gGamma={gGamma}
        terminalX={x1}
        partPossibleH={true}
      />,
    );

    introduceContribution();
    finishFirstSituation();

    expect(screen.getByTestId("completes-struct")).toHaveTextContent("false");

    expect(screen.getByTestId("part-possible-h")).toHaveTextContent("true");
  });

  it("T-EX002-18 Disp_W deriva únicamente de PartPossible_h y CompletesStruct", () => {
    expect(dispW(true, true)).toBe(true);
    expect(dispW(true, false)).toBe(false);
    expect(dispW(false, true)).toBe(false);
    expect(dispW(false, false)).toBe(false);
  });

  it("T-EX002-19 S2 produce Disp_W=true cuando PartPossible_h y CompletesStruct son true", () => {
    render(
      <ExPv00102
        aRef={a0}
        gGamma={gGamma}
        terminalX={x1}
        partPossibleH={true}
      />,
    );

    introduceContribution();
    finishFirstSituation();

    expect(screen.getByTestId("part-possible-h")).toHaveTextContent("true");

    expect(screen.getByTestId("completes-struct")).toHaveTextContent("true");

    expect(screen.getByTestId("disp-w")).toHaveTextContent("true");
  });

  it("T-EX002-20 S2 produce Disp_W=false cuando PartPossible_h=true y CompletesStruct=false", () => {
    render(
      <ExPv00102
        aRef={a1}
        gGamma={gGamma}
        terminalX={x1}
        partPossibleH={true}
      />,
    );

    introduceContribution();
    finishFirstSituation();

    expect(screen.getByTestId("part-possible-h")).toHaveTextContent("true");

    expect(screen.getByTestId("completes-struct")).toHaveTextContent("false");

    expect(screen.getByTestId("disp-w")).toHaveTextContent("false");
  });

  it("T-EX002-21 dos x distintos pueden conservar el mismo Disp_W=false", () => {
    const first = render(
      <ExPv00102
        aRef={a1}
        gGamma={gGamma}
        terminalX={x1}
        partPossibleH={true}
      />,
    );

    introduceContribution();
    finishFirstSituation();

    expect(screen.getByTestId("outcome")).toHaveTextContent("x2");

    expect(screen.getByTestId("disp-w")).toHaveTextContent("false");

    first.unmount();

    render(
      <ExPv00102
        aRef={aControl}
        gGamma={gGamma}
        terminalX={x1}
        partPossibleH={true}
      />,
    );

    introduceContribution();
    finishFirstSituation();

    expect(screen.getByTestId("outcome")).toHaveTextContent("x3");

    expect(screen.getByTestId("disp-w")).toHaveTextContent("false");
  });

  it("T-EX002-22 a0, a1 y aControl son representaciones observables distintas de A", () => {
    expect(a0.text).not.toBe(a1.text);
    expect(a0.text).not.toBe(aControl.text);
    expect(a1.text).not.toBe(aControl.text);
  });

  it("T-EX002-23 la diferencia de A es observable antes de aplicar g_Γ", () => {
    const first = render(
      <ExPv00102
        aRef={a0}
        gGamma={gGamma}
        terminalX={x1}
        partPossibleH={true}
      />,
    );

    expect(screen.getByTestId("a-representation")).toHaveTextContent(a0.text);

    expect(screen.getByRole("button", { name: "Finalizar S1" })).toBeDisabled();

    first.unmount();

    render(
      <ExPv00102
        aRef={a1}
        gGamma={gGamma}
        terminalX={x1}
        partPossibleH={true}
      />,
    );

    expect(screen.getByTestId("a-representation")).toHaveTextContent(a1.text);

    expect(screen.getByRole("button", { name: "Finalizar S1" })).toBeDisabled();
  });
});
