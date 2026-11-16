import { describe, expect, it, vi } from "vitest";
import {
  applyChunkAToB,
  restoreB,
  type ExecutableMerge,
} from "./CodeMirrorChunkExecution";

function editor(text: string) {
  let value = text;
  const dispatch = vi.fn((spec: {
    changes: { from: number; to: number; insert: string };
  }) => {
    const { from, to, insert } = spec.changes;
    value = value.slice(0, from) + insert + value.slice(to);
  });

  return {
    get value() {
      return value;
    },
    state: {
      get doc() {
        return {
          length: value.length,
          toString: () => value,
        };
      },
      sliceDoc(from = 0, to = value.length) {
        return value.slice(from, to);
      },
    },
    dispatch,
  };
}

describe("ID-80-02-A3-R4 — ejecución controlada por chunk", () => {
  it("[T-A3-R4-01] aplica sólo el chunk elegido de A sobre B", () => {
    const a = editor("uno\ndos\ntres\n");
    const b = editor("uno\nDOS\ntres\n");
    const merge = {
      a,
      b,
      chunks: [{ fromA: 4, toA: 8, fromB: 4, toB: 8 }],
    } as unknown as ExecutableMerge;

    const snapshot = applyChunkAToB(merge, 0);

    expect(snapshot).not.toBeNull();
    expect(b.value).toBe("uno\ndos\ntres\n");
    expect(a.value).toBe("uno\ndos\ntres\n");
  });

  it("[T-A3-R4-02] no modifica nada sin chunk válido", () => {
    const a = editor("A");
    const b = editor("B");
    const merge = {
      a,
      b,
      chunks: [],
    } as unknown as ExecutableMerge;

    expect(applyChunkAToB(merge, 0)).toBeNull();
    expect(a.value).toBe("A");
    expect(b.value).toBe("B");
    expect(b.dispatch).not.toHaveBeenCalled();
  });

  it("[T-A3-R4-03] conserva snapshot previo y permite deshacer", () => {
    const a = editor("alfa\nbeta\n");
    const b = editor("alfa\nBETA\n");
    const merge = {
      a,
      b,
      chunks: [{ fromA: 5, toA: 10, fromB: 5, toB: 10 }],
    } as unknown as ExecutableMerge;

    const snapshot = applyChunkAToB(merge, 0);

    expect(b.value).toBe("alfa\nbeta\n");
    expect(restoreB(merge, snapshot)).toBe(true);
    expect(b.value).toBe("alfa\nBETA\n");
  });

  it("[T-A3-R4-04] deshacer sin snapshot no modifica B", () => {
    const a = editor("A");
    const b = editor("B");
    const merge = {
      a,
      b,
      chunks: [],
    } as unknown as ExecutableMerge;

    expect(restoreB(merge, null)).toBe(false);
    expect(b.value).toBe("B");
    expect(b.dispatch).not.toHaveBeenCalled();
  });

  it("[T-A3-R4-05] la ejecución requiere una llamada explícita separada de navegar", () => {
    const a = editor("uno\ndos\n");
    const b = editor("uno\nDOS\n");
    const merge = {
      a,
      b,
      chunks: [{ fromA: 4, toA: 8, fromB: 4, toB: 8 }],
    } as unknown as ExecutableMerge;

    expect(b.value).toBe("uno\nDOS\n");
    expect(b.dispatch).not.toHaveBeenCalled();

    applyChunkAToB(merge, 0);

    expect(b.dispatch).toHaveBeenCalledTimes(1);
  });
});
