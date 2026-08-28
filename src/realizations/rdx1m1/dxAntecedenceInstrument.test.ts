import { describe, expect, it } from "vitest";
import { createFromPrevious } from "../ru2m1/resumeModel";

describe("R-DX1-M1 antecedence instrument contract", () => {
  it("[C-DX02] constitutes X → Y only from valid X and Y", () => {
    const result = createFromPrevious("X1", "Y1");

    expect(result).toEqual({
      previous: "X1",
      current: "Y1",
    });
  });

  it("[T-DX09] rejects an invalid empty Y", () => {
    expect(() => createFromPrevious("X1", "")).toThrow();
    expect(() => createFromPrevious("X1", "   ")).toThrow();
    expect(() => createFromPrevious("X1", "\n")).toThrow();
  });

  it("[T-DX10] rejects constituting X → Y when X is unavailable", () => {
    expect(() => createFromPrevious(null, "Y1")).toThrow();
  });

  it("[C-DX08/C-DX09] distinguishes later incidence with Y from absence of Y", () => {
    expect(createFromPrevious("Y1", "Z1")).toEqual({
      previous: "Y1",
      current: "Z1",
    });

    expect(() => createFromPrevious(null, "Z1")).toThrow();
  });

  it("[T-DX07] allows Y to act as antecedent of a later Z", () => {
    const result = createFromPrevious("Y1", "Z1");

    expect(result.previous).toBe("Y1");
    expect(result.current).toBe("Z1");
  });

  it("[T-DX08] does not constitute Y → Z without Y", () => {
    expect(() => createFromPrevious(null, "Z1")).toThrow();
  });

  it("[C-DX10] does not depend on the semantic meaning of X, Y or Z", () => {
    expect(
      createFromPrevious(
        "Una aportación sobre paleontología",
        "Una conclusión sobre una fotografía",
      ),
    ).toEqual({
      previous: "Una aportación sobre paleontología",
      current: "Una conclusión sobre una fotografía",
    });

    expect(
      createFromPrevious(
        "Contenido completamente distinto",
        "Otra actuación sin continuidad semántica",
      ),
    ).toEqual({
      previous: "Contenido completamente distinto",
      current: "Otra actuación sin continuidad semántica",
    });
  });
});
