import { useState } from "react";

export type ARef = Readonly<{
  text: string;
}>;

export const a0: ARef = Object.freeze({
  text: "La llave está en el cajón.",
});

export const a1: ARef = Object.freeze({
  text: "La llave está en la repisa.",
});

export const aControl: ARef = Object.freeze({
  text: "La llave está en la caja.",
});

export const x1 = Symbol("x1");
export const x2 = Symbol("x2");
export const x3 = Symbol("x3");

export type XRef = typeof x1 | typeof x2 | typeof x3;

export const X: readonly XRef[] = [x1, x2, x3];

export type OutRef = Readonly<{
  source: XRef;
}>;

export function out(x: XRef): OutRef {
  return Object.freeze({
    source: x,
  });
}

export function sameOut(left: OutRef, right: OutRef): boolean {
  return left.source === right.source;
}

export function isTerminal(value: OutRef, terminalX: XRef): boolean {
  return sameOut(value, out(terminalX));
}

export function completesStruct(value: OutRef, terminalX: XRef): boolean {
  return isTerminal(value, terminalX);
}

export function dispW(partPossibleH: boolean, complete: boolean): boolean {
  return partPossibleH && complete;
}

export type GGamma = ReadonlyMap<ARef, XRef>;

function applyGGamma(gGamma: GGamma, a: ARef): XRef {
  const x = gGamma.get(a);

  if (x === undefined) {
    throw new Error("A_repr fuera del dominio de g_Γ");
  }

  return x;
}

type ExPv00102Props = {
  aRef: ARef;
  gGamma: GGamma;
  terminalX: XRef;
  partPossibleH: boolean;
};

function ExPv00102({ aRef, gGamma, terminalX, partPossibleH }: ExPv00102Props) {
  const [x, setX] = useState<XRef | null>(null);
  const [isSecondSituation, setIsSecondSituation] = useState(false);

  function introduceContribution() {
    setX(applyGGamma(gGamma, aRef));
  }

  if (isSecondSituation) {
    if (x === null) {
      throw new Error("S2 requiere un x previamente obtenido");
    }

    const outcome = out(x);
    const terminal = isTerminal(outcome, terminalX);
    const complete = completesStruct(outcome, terminalX);
    const available = dispW(partPossibleH, complete);

    return (
      <section>
        <h2>S2</h2>
        <p>Necesitas encontrar la llave.</p>

        <p data-testid="outcome">{String(outcome.source.description)}</p>

        <p data-testid="cr-term">{String(terminal)}</p>

        <p data-testid="completes-struct">{String(complete)}</p>

        <p data-testid="part-possible-h">{String(partPossibleH)}</p>

        <p data-testid="disp-w">{String(available)}</p>
      </section>
    );
  }
  return (
    <section>
      <h2>S1</h2>

      <p data-testid="a-representation">{aRef.text}</p>

      <button onClick={introduceContribution}>Introducir A</button>

      <button disabled={x === null} onClick={() => setIsSecondSituation(true)}>
        Finalizar S1
      </button>
    </section>
  );
}

export default ExPv00102;
