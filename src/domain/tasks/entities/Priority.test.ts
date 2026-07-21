import { describe, expect, it } from "vitest";
import { Priority } from "./Priority";

describe("Priority", () => {
  it("creates a low priority", () => {
    const priority = Priority.low();

    expect(priority.toString()).toBe("low");
  });

  it("creates a medium priority", () => {
    const priority = Priority.medium();

    expect(priority.toString()).toBe("medium");
  });

  it("creates a high priority", () => {
    const priority = Priority.high();

    expect(priority.toString()).toBe("high");
  });

  it("restores a priority", () => {
    const priority = Priority.restore("high");

    expect(priority.toString()).toBe("high");
  });

  it("compares priorities", () => {
    const first = Priority.high();
    const second = Priority.high();

    expect(first.equals(second)).toBe(true);
  });

  it("detects different priorities", () => {
    const first = Priority.high();
    const second = Priority.low();

    expect(first.equals(second)).toBe(false);
  });
});