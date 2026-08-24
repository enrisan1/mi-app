import { describe, expect, it } from "vitest";
import {
  continueFromPrevious,
  isContinuationAvailable,
} from "./experimentModel";

describe("EX-R-A1 experiment model", () => {
  describe("isContinuationAvailable", () => {
    it("returns false when there is no previous contribution", () => {
      expect(isContinuationAvailable(null)).toBe(false);
    });

    it("returns true when there is a valid previous contribution", () => {
      expect(isContinuationAvailable("Separar X de Y")).toBe(true);
    });

    it("makes continuation availability depend on the presence of a valid previous contribution", () => {
      expect(isContinuationAvailable(null)).toBe(false);
      expect(isContinuationAvailable("A")).toBe(true);
    });

    it("does not make availability depend on the semantic content of the previous contribution", () => {
      expect(isContinuationAvailable("A")).toBe(true);
      expect(
        isContinuationAvailable("Una formulación completamente distinta"),
      ).toBe(true);
    });

    it("returns false for an empty previous contribution", () => {
      expect(isContinuationAvailable("")).toBe(false);
    });

    it("returns false for a previous contribution containing only whitespace", () => {
      expect(isContinuationAvailable(" ")).toBe(false);
      expect(isContinuationAvailable("   ")).toBe(false);
      expect(isContinuationAvailable("\n")).toBe(false);
      expect(isContinuationAvailable("\t")).toBe(false);
    });

    it("accepts a previous contribution with surrounding whitespace", () => {
      expect(isContinuationAvailable("  A  ")).toBe(true);
    });
  });

  describe("continueFromPrevious", () => {
    it("rejects continuation when there is no previous contribution", () => {
      expect(() => continueFromPrevious(null, "B")).toThrow();
    });

    it("returns the previous contribution and the continuation when both are valid", () => {
      const result = continueFromPrevious(
        "Separar X de Y",
        "Entonces conviene examinarlos por separado",
      );

      expect(result).toEqual({
        previous: "Separar X de Y",
        continuation: "Entonces conviene examinarlos por separado",
      });
    });

    it("rejects an empty continuation", () => {
      expect(() => continueFromPrevious("A", "")).toThrow();
    });

    it("rejects a continuation containing only whitespace", () => {
      expect(() => continueFromPrevious("A", " ")).toThrow();

      expect(() => continueFromPrevious("A", "   ")).toThrow();

      expect(() => continueFromPrevious("A", "\n")).toThrow();

      expect(() => continueFromPrevious("A", "\t")).toThrow();
    });

    it("preserves surrounding whitespace in a valid continuation", () => {
      const result = continueFromPrevious("A", "  B  ");

      expect(result).toEqual({
        previous: "A",
        continuation: "  B  ",
      });
    });

    it("accepts different valid continuation contents without evaluating their semantics", () => {
      expect(continueFromPrevious("A", "B1")).toEqual({
        previous: "A",
        continuation: "B1",
      });

      expect(continueFromPrevious("A", "B2")).toEqual({
        previous: "A",
        continuation: "B2",
      });

      expect(
        continueFromPrevious("A", "Una afirmación completamente distinta"),
      ).toEqual({
        previous: "A",
        continuation: "Una afirmación completamente distinta",
      });
    });

    it("preserves the exact previous contribution in the result", () => {
      const result = continueFromPrevious("  A  ", "B");

      expect(result.previous).toBe("  A  ");
    });

    it("rejects an empty previous contribution", () => {
      expect(() => continueFromPrevious("", "B")).toThrow();
    });

    it("rejects a previous contribution containing only whitespace", () => {
      expect(() => continueFromPrevious(" ", "B")).toThrow();

      expect(() => continueFromPrevious("   ", "B")).toThrow();

      expect(() => continueFromPrevious("\n", "B")).toThrow();

      expect(() => continueFromPrevious("\t", "B")).toThrow();
    });
  });
});
