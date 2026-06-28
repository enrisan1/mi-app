import { describe, it, expect, beforeEach, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useTasks } from "../ui/hooks/useTasks";
import { tasksStore } from "../domain/tasks/tasksStore";

describe("useTasks (senior architecture)", () => {
  beforeEach(() => {
    tasksStore.clear(); // 👈 reemplazo directo
    localStorage.clear();
    vi.clearAllMocks();
  });

  it("añade y lista tareas", () => {
    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.addTask("A");
      result.current.addTask("B");
    });

    expect(result.current.tasks).toHaveLength(2);
  });

  it("toggle funciona correctamente", () => {
    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.addTask("A");
      result.current.addTask("B");
    });

    const id = result.current.tasks.find((t) => t.text === "B").id;

    act(() => {
      result.current.toggleTask(id);
    });

    const tasks = result.current.tasks;

    expect(tasks.find((t) => t.text === "A").completed).toBe(false);
    expect(tasks.find((t) => t.text === "B").completed).toBe(true);
  });

  it("filtro completed funciona", () => {
    const { result } = renderHook(() => useTasks());

    act(() => {
      result.current.addTask("A");
      result.current.addTask("B");
    });

    const id = result.current.tasks.find((t) => t.text === "B").id;

    act(() => {
      result.current.toggleTask(id);
    });

    act(() => {
      result.current.setFilter("completed");
    });

    expect(result.current.filteredTasks).toHaveLength(1);
  });
});
