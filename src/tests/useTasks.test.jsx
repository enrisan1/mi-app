import { describe, it, expect, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { TasksProvider } from "../ui/context/TasksProvider";
import { useTasks } from "../ui/hooks/useTasks";

const wrapper = ({ children }) => <TasksProvider>{children}</TasksProvider>;

describe("useTasks (senior architecture)", () => {
  beforeEach(() => {
    // opcional reset si quieres
  });

  it("añade y lista tareas", () => {
    const { result } = renderHook(() => useTasks(), { wrapper });

    act(() => {
      result.current.addTask("A");
      result.current.addTask("B");
    });

    expect(result.current.filteredTasks).toHaveLength(2);
  });

  it("toggle funciona correctamente", () => {
    const { result } = renderHook(() => useTasks(), { wrapper });

    act(() => {
      result.current.addTask("A");
      result.current.addTask("B");
    });

    const id = result.current.filteredTasks.find((t) => t.text === "B").id;

    act(() => {
      result.current.toggleTask(id);
    });

    const tasks = result.current.filteredTasks;

    expect(tasks.find((t) => t.text === "A").completed).toBe(false);
    expect(tasks.find((t) => t.text === "B").completed).toBe(true);
  });

  it("filtro completed funciona", () => {
    const { result } = renderHook(() => useTasks(), { wrapper });

    act(() => {
      result.current.addTask("A");
      result.current.addTask("B");
    });

    const id = result.current.filteredTasks.find((t) => t.text === "B").id;

    act(() => {
      result.current.toggleTask(id);
    });

    act(() => {
      result.current.setFilter("completed");
    });

    expect(result.current.filteredTasks).toHaveLength(1);
  });
});
