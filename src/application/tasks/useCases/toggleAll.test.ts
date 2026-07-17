import { describe, it, expect, vi } from "vitest";
import { createToggleAllUseCase } from "./toggleAll";
import type { TaskActions } from "../taskActions.types";

describe("createToggleAllUseCase", () => {
  it("should mark all tasks as completed when there are pending tasks", () => {
    const actions: TaskActions = {
      addTask: vi.fn(),
      deleteTask: vi.fn(),
      toggleTask: vi.fn(),
      editTask: vi.fn(),
      clearCompleted: vi.fn(),
      markAllCompleted: vi.fn(),
      markAllPending: vi.fn(),

      hasPendingTasks: () => true,

      undo: vi.fn(() => false),
      hasUndo: () => false,

      redo: vi.fn(() => false),
      hasRedo: () => false,
    };

    const toggleAll = createToggleAllUseCase(actions);

    toggleAll();

    expect(actions.markAllCompleted).toHaveBeenCalledTimes(1);
    expect(actions.markAllPending).not.toHaveBeenCalled();
  });

  it("should mark all tasks as pending when there are no pending tasks", () => {
    const actions: TaskActions = {
      addTask: vi.fn(),
      deleteTask: vi.fn(),
      toggleTask: vi.fn(),
      editTask: vi.fn(),
      clearCompleted: vi.fn(),
      markAllCompleted: vi.fn(),
      markAllPending: vi.fn(),

      hasPendingTasks: () => false,

      undo: vi.fn(() => false),
      hasUndo: () => false,

      redo: vi.fn(() => false),
      hasRedo: () => false,
    };

    const toggleAll = createToggleAllUseCase(actions);

    toggleAll();

    expect(actions.markAllPending).toHaveBeenCalledTimes(1);
    expect(actions.markAllCompleted).not.toHaveBeenCalled();
  });
});
