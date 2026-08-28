import { beforeEach, describe, expect, it, vi } from "vitest";
import { localStorageDxRepository } from "./localStorageDxRepository";

describe("R-DX1-M1 localStorage repository contract", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it("[C-DX01] distinguishes the local availability states of X and Y", () => {
    expect(localStorageDxRepository.loadX()).toBeNull();
    expect(localStorageDxRepository.loadY()).toBeNull();

    localStorageDxRepository.saveX("X1");

    expect(localStorageDxRepository.loadX()).toBe("X1");
    expect(localStorageDxRepository.loadY()).toBeNull();

    localStorageDxRepository.saveY("Y1");

    expect(localStorageDxRepository.loadX()).toBe("X1");
    expect(localStorageDxRepository.loadY()).toBe("Y1");

    localStorageDxRepository.removeX();

    expect(localStorageDxRepository.loadX()).toBeNull();
    expect(localStorageDxRepository.loadY()).toBe("Y1");
  });

  it("[T-DX01] makes X available without making Y available", () => {
    localStorageDxRepository.saveX("X1");

    expect(localStorageDxRepository.loadX()).toBe("X1");
    expect(localStorageDxRepository.loadY()).toBeNull();
  });

  it("[C-DX03/T-DX02] makes Y independently available without replacing X", () => {
    localStorageDxRepository.saveX("X1");
    localStorageDxRepository.saveY("Y1");

    expect(localStorageDxRepository.loadX()).toBe("X1");
    expect(localStorageDxRepository.loadY()).toBe("Y1");
  });

  it("[C-DX04/T-DX03] removes X while preserving Y", () => {
    localStorageDxRepository.saveX("X1");
    localStorageDxRepository.saveY("Y1");

    localStorageDxRepository.removeX();

    expect(localStorageDxRepository.loadX()).toBeNull();
    expect(localStorageDxRepository.loadY()).toBe("Y1");
  });

  it("[T-DX04] preserves the exact Y value when X is removed", () => {
    localStorageDxRepository.saveX("X1");
    localStorageDxRepository.saveY("  Y1  ");

    localStorageDxRepository.removeX();

    expect(localStorageDxRepository.loadY()).toBe("  Y1  ");
  });

  it("[C-DX04/T-DX05] does not rewrite any persisted value while removing X", () => {
    localStorageDxRepository.saveX("X1");
    localStorageDxRepository.saveY("Y1");

    const setItemSpy = vi.spyOn(Storage.prototype, "setItem");

    localStorageDxRepository.removeX();

    expect(setItemSpy).not.toHaveBeenCalled();

    expect(localStorageDxRepository.loadX()).toBeNull();
    expect(localStorageDxRepository.loadY()).toBe("Y1");
  });

  it("[C-DX06/T-DX06] restores Y from persisted state while X remains unavailable", () => {
    localStorageDxRepository.saveX("X1");
    localStorageDxRepository.saveY("Y1");
    localStorageDxRepository.removeX();

    expect(localStorageDxRepository.loadX()).toBeNull();
    expect(localStorageDxRepository.loadY()).toBe("Y1");
  });

  it("[C-DX07/T-DX11] preserves Y literally across persistence", () => {
    localStorageDxRepository.saveY("  Y-EXPERIMENTO-01\t");

    expect(localStorageDxRepository.loadY()).toBe("  Y-EXPERIMENTO-01\t");
  });

  it("[T-DX12] keeps independent experimental Y values distinguishable", () => {
    localStorageDxRepository.saveY("YA");

    expect(localStorageDxRepository.loadY()).toBe("YA");

    localStorage.clear();

    localStorageDxRepository.saveY("YB");

    expect(localStorageDxRepository.loadY()).toBe("YB");
    expect(localStorageDxRepository.loadY()).not.toBe("YA");
  });
});
