import { describe, it, expect, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useLocalStorage } from "../hooks/useLocalStorage";

describe("useLocalStorage", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("devuelve el valor inicial", () => {
    const { result } = renderHook(() => useLocalStorage("test", []));

    expect(result.current[0]).toEqual([]);
  });

  it("guarda cambios en localStorage", () => {
    const { result } = renderHook(() => useLocalStorage("test", []));

    act(() => {
      result.current[1]([{ id: 1, text: "React" }]);
    });

    expect(result.current[0]).toEqual([{ id: 1, text: "React" }]);

    expect(JSON.parse(localStorage.getItem("test"))).toEqual([
      { id: 1, text: "React" },
    ]);
  });
});
