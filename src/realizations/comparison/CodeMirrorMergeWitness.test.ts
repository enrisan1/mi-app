import { describe, expect, it, vi } from "vitest";
import { presentableDiff } from "@codemirror/merge";
import { revealChunkOnBothSides } from "./CodeMirrorMergeWitness";

function materialize(
  a: string,
  b: string,
) {
  return presentableDiff(a, b).map((change) => ({
    sourceA: a.slice(change.fromA, change.toA),
    sourceB: b.slice(change.fromB, change.toB),
    fromA: change.fromA,
    toA: change.toA,
    fromB: change.fromB,
    toB: change.toB,
  }));
}

describe("ID-80-02-A3 — testigo real de @codemirror/merge", () => {
  it("[T-A3-CM-01] presenta tres → cuatro como sustitución completa", () => {
    const result = materialize(
      "Durante las primeras cuatro semanas se incorporarán tres expedientes.",
      "Durante las primeras cinco semanas se incorporarán cuatro expedientes.",
    );

    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ sourceA: "tres", sourceB: "cuatro" }),
      ]),
    );
  });

  it("[T-A3-CM-02] no marca todos al cambiar lunes → martes", () => {
    const first = "La coordinación será todos los lunes a primera hora.";
    const second = "La coordinación será todos los martes a primera hora.";
    const result = materialize(first, second);

    expect(result).toEqual([
      expect.objectContaining({ sourceA: "lunes", sourceB: "martes" }),
    ]);
    expect(result.some((change) => change.sourceA.includes("todos"))).toBe(false);
    expect(result.some((change) => change.sourceB.includes("todos"))).toBe(false);
  });

  it("[T-A3-CM-03] conserva inserción con rango vacío en A", () => {
    const first = "La referencia debe prevalecer.";
    const second = "La referencia debe prevalecer y dejar constancia.";
    const result = materialize(first, second);

    expect(
      result.some(
        (change) =>
          change.sourceA === "" &&
          change.sourceB.includes("dejar constancia"),
      ),
    ).toBe(true);
  });

  it("[T-A3-CM-04] conserva sustitución con rangos verificables en ambos lados", () => {
    const first = "La decisión será el viernes.";
    const second = "La decisión será el miércoles.";
    const [change] = materialize(first, second);

    expect(change).toMatchObject({
      sourceA: "viernes",
      sourceB: "miércoles",
    });
    expect(first.slice(change!.fromA, change!.toA)).toBe("viernes");
    expect(second.slice(change!.fromB, change!.toB)).toBe("miércoles");
  });

  it("[T-A3-CM-05] el adaptador lleva ambos lados al mismo chunk", () => {
    const dispatchA = vi.fn();
    const dispatchB = vi.fn();

    const chunk = revealChunkOnBothSides(
      {
        a: { dispatch: dispatchA },
        b: { dispatch: dispatchB },
        chunks: [
          { fromA: 120, toA: 135, fromB: 140, toB: 158 },
          { fromA: 500, toA: 520, fromB: 550, toB: 575 },
        ],
      },
      1,
    );

    expect(chunk).toEqual({
      fromA: 500,
      toA: 520,
      fromB: 550,
      toB: 575,
    });
    expect(dispatchA).toHaveBeenCalledWith({
      selection: { anchor: 500 },
      scrollIntoView: true,
    });
    expect(dispatchB).toHaveBeenCalledWith({
      selection: { anchor: 550 },
      scrollIntoView: true,
    });
  });

  it("[T-A3-CM-06] un índice fuera de rango no mueve ningún lado", () => {
    const dispatchA = vi.fn();
    const dispatchB = vi.fn();

    expect(
      revealChunkOnBothSides(
        {
          a: { dispatch: dispatchA },
          b: { dispatch: dispatchB },
          chunks: [{ fromA: 1, toA: 2, fromB: 3, toB: 4 }],
        },
        99,
      ),
    ).toBeNull();

    expect(dispatchA).not.toHaveBeenCalled();
    expect(dispatchB).not.toHaveBeenCalled();
  });
});
