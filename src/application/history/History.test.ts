import { describe, expect, it } from "vitest";
import { History } from "./History";

describe("History", () => {
  it("stores states for undo", () => {
    const history = new History<number>();

    history.push(1);

    expect(history.canUndo()).toBe(true);
  });

  it("returns the previous state when undoing", () => {
    const history = new History<string>();

    history.push("A");
    history.push("B");

    expect(history.undo("C")).toBe("B");
    expect(history.undo("B")).toBe("A");
  });

  it("returns undefined when there is nothing to undo", () => {
    const history = new History<number>();

    expect(history.undo(1)).toBeUndefined();
  });

  it("returns undefined when there is nothing to redo", () => {
    const history = new History<number>();

    expect(history.redo(1)).toBeUndefined();
  });

  it("returns undefined when there is nothing to redo", () => {
    const history = new History<number>();

    expect(history.redo(1)).toBeUndefined();
  });

  it("reports when redo is available", () => {
    const history = new History<string>();

    expect(history.canRedo()).toBe(false);

    history.push("A");
    history.undo("B");

    expect(history.canRedo()).toBe(true);
  });

  it("clears both histories", () => {
    const history = new History<string>();

    history.push("A");
    history.push("B");

    history.undo("C");

    expect(history.canUndo()).toBe(true);
    expect(history.canRedo()).toBe(true);

    history.clear();

    expect(history.canUndo()).toBe(false);
    expect(history.canRedo()).toBe(false);

    expect(history.undo("C")).toBeUndefined();
    expect(history.redo("C")).toBeUndefined();
  });

  it("clears redo history after push", () => {
    const history = new History<string>();

    history.push("A");
    history.push("B");

    history.undo("C");

    expect(history.canRedo()).toBe(true);

    history.push("B");

    expect(history.canRedo()).toBe(false);
  });

  const history = new History<string>(2);

  history.push("A");
  history.push("B");
  history.push("C");

  expect(history.undo("D")).toBe("C");
  expect(history.undo("C")).toBe("B");
  expect(history.undo("B")).toBeUndefined();

  it("clears redo history after push", () => {
    const history = new History<string>();

    history.push("A");
    history.push("B");

    history.undo("C");

    expect(history.canRedo()).toBe(true);

    history.push("B");

    expect(history.canRedo()).toBe(false);
  });

  it("discards the oldest state when the limit is reached", () => {
    const history = new History<string>(2);

    history.push("A");
    history.push("B");
    history.push("C");

    expect(history.undo("D")).toBe("C");
    expect(history.undo("C")).toBe("B");
    expect(history.undo("B")).toBeUndefined();
  });
});
