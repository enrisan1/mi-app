import { describe, expect, it } from "vitest";
import { createFromPrevious, isResumeAvailable } from "./resumeModel";

describe("R-U2-M1 resume model", () => {
  describe("isResumeAvailable", () => {
    it("returns false when there is no previous state", () => {
      expect(isResumeAvailable(null)).toBe(false);
    });

    it("returns true when there is a valid previous state", () => {
      expect(isResumeAvailable("Resultado alcanzado anteriormente")).toBe(true);
    });

    it("makes resume availability depend on the presence of valid previous state", () => {
      expect(isResumeAvailable(null)).toBe(false);
      expect(isResumeAvailable("X")).toBe(true);
    });

    it("does not interpret the semantic content of the previous state", () => {
      expect(isResumeAvailable("X")).toBe(true);

      expect(isResumeAvailable("Se decidió auditar el documento A")).toBe(true);

      expect(
        isResumeAvailable("Un contenido anterior completamente distinto"),
      ).toBe(true);
    });

    it("returns false for an empty previous state", () => {
      expect(isResumeAvailable("")).toBe(false);
    });

    it("returns false for previous state containing only whitespace", () => {
      expect(isResumeAvailable(" ")).toBe(false);
      expect(isResumeAvailable("   ")).toBe(false);
      expect(isResumeAvailable("\n")).toBe(false);
      expect(isResumeAvailable("\t")).toBe(false);
    });

    it("accepts previous state with surrounding whitespace", () => {
      expect(isResumeAvailable("  X  ")).toBe(true);
    });
  });

  describe("createFromPrevious", () => {
    it("rejects creating a situated result when there is no previous state", () => {
      expect(() => createFromPrevious(null, "Y")).toThrow();
    });

    it("creates a situated result when previous and current values are valid", () => {
      const result = createFromPrevious(
        "Resultado alcanzado anteriormente",
        "Nueva actuación",
      );

      expect(result).toEqual({
        previous: "Resultado alcanzado anteriormente",
        current: "Nueva actuación",
      });
    });

    it("rejects an empty current value", () => {
      expect(() => createFromPrevious("X", "")).toThrow();
    });

    it("rejects a current value containing only whitespace", () => {
      expect(() => createFromPrevious("X", " ")).toThrow();

      expect(() => createFromPrevious("X", "   ")).toThrow();

      expect(() => createFromPrevious("X", "\n")).toThrow();

      expect(() => createFromPrevious("X", "\t")).toThrow();
    });

    it("rejects an empty previous state", () => {
      expect(() => createFromPrevious("", "Y")).toThrow();
    });

    it("rejects previous state containing only whitespace", () => {
      expect(() => createFromPrevious(" ", "Y")).toThrow();

      expect(() => createFromPrevious("   ", "Y")).toThrow();

      expect(() => createFromPrevious("\n", "Y")).toThrow();

      expect(() => createFromPrevious("\t", "Y")).toThrow();
    });

    it("preserves the exact previous value", () => {
      const result = createFromPrevious("  X  ", "Y");

      expect(result.previous).toBe("  X  ");
    });

    it("preserves the exact current value", () => {
      const result = createFromPrevious("X", "  Y  ");

      expect(result.current).toBe("  Y  ");
    });

    it("accepts different current contents without evaluating their semantics", () => {
      expect(createFromPrevious("X", "Y1")).toEqual({
        previous: "X",
        current: "Y1",
      });

      expect(createFromPrevious("X", "Y2")).toEqual({
        previous: "X",
        current: "Y2",
      });

      expect(
        createFromPrevious("X", "Una actuación completamente distinta"),
      ).toEqual({
        previous: "X",
        current: "Una actuación completamente distinta",
      });
    });

    it("does not require the current value to semantically continue the previous one", () => {
      expect(
        createFromPrevious(
          "Se decidió auditar el documento A",
          "Examinar una nueva fuente histórica",
        ),
      ).toEqual({
        previous: "Se decidió auditar el documento A",
        current: "Examinar una nueva fuente histórica",
      });

      expect(
        createFromPrevious(
          "Se decidió auditar el documento A",
          "Escribir una conclusión completamente diferente",
        ),
      ).toEqual({
        previous: "Se decidió auditar el documento A",
        current: "Escribir una conclusión completamente diferente",
      });
    });
  });
});
