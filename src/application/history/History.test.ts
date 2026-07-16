import { describe, expect, it } from "vitest";
import { History } from "./History";

describe("History", () => {
  it("stores an entry", () => {
    const history = new History<number>();

    history.push(1);

    expect(history.pop()).toBe(1);
  });

  it("returns the last stored entry", () => {
    const history = new History<number>();

    history.push(1);
    history.push(2);

    expect(history.pop()).toBe(2);
    expect(history.pop()).toBe(1);
  });

  it("returns undefined when empty", () => {
    const history = new History<number>();

    expect(history.pop()).toBeUndefined();
  });

  it("reports when history is empty", () => {
    const history = new History<number>();

    expect(history.hasEntries()).toBe(false);

    history.push(1);

    expect(history.hasEntries()).toBe(true);
  });

  it("clears all entries", () => {
    const history = new History<number>();

    history.push(1);
    history.push(2);

    history.clear();

    expect(history.hasEntries()).toBe(false);
    expect(history.pop()).toBeUndefined();
  });
});
