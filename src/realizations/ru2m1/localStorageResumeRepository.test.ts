import { beforeEach, describe, expect, it } from "vitest";
import { localStorageResumeRepository } from "./localStorageResumeRepository";

describe("R-U2-M1 localStorage resume repository", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("returns null when there is no previous state stored", () => {
    expect(localStorageResumeRepository.loadPrevious()).toBeNull();
  });

  it("stores and restores a previous state", () => {
    localStorageResumeRepository.savePrevious(
      "Resultado alcanzado anteriormente",
    );

    expect(localStorageResumeRepository.loadPrevious()).toBe(
      "Resultado alcanzado anteriormente",
    );
  });

  it("preserves the exact stored value", () => {
    localStorageResumeRepository.savePrevious("  X  ");

    expect(localStorageResumeRepository.loadPrevious()).toBe("  X  ");
  });

  it("does not normalize the stored value", () => {
    localStorageResumeRepository.savePrevious("\n  X\t ");

    expect(localStorageResumeRepository.loadPrevious()).toBe("\n  X\t ");
  });

  it("does not interpret or validate the semantic content of the stored value", () => {
    localStorageResumeRepository.savePrevious(
      "Un contenido completamente distinto",
    );

    expect(localStorageResumeRepository.loadPrevious()).toBe(
      "Un contenido completamente distinto",
    );
  });

  it("replaces the previously stored value when a new one is saved", () => {
    localStorageResumeRepository.savePrevious("X1");
    localStorageResumeRepository.savePrevious("X2");

    expect(localStorageResumeRepository.loadPrevious()).toBe("X2");
  });

  it("retains X without replacing the previous Y", () => {
    localStorageResumeRepository.savePrevious("Y");
    localStorageResumeRepository.saveRetained("X");

    expect(localStorageResumeRepository.loadPrevious()).toBe("Y");
    expect(localStorageResumeRepository.loadRetained()).toBe("X");
  });
});
