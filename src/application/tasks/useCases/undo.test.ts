import { describe, expect, it, vi } from "vitest";
import { createUndoUseCase } from "./undo";
import type { TaskActions } from "../taskActions.types";

describe("undo", () => {
  it("restores the previous state", () => {
    const actions: TaskActions = {
      addTask: vi.fn(),
      deleteTask: vi.fn(),
      toggleTask: vi.fn(),
      editTask: vi.fn(),
      clearCompleted: vi.fn(),
      markAllCompleted: vi.fn(),
      markAllPending: vi.fn(),

      hasPendingTasks: () => false,

      undo: vi.fn(() => true),
      hasUndo: () => true,

      redo: vi.fn(() => false),
      hasRedo: () => false,
    };

    const undo = createUndoUseCase(actions);

    expect(undo()).toBe(true);
    expect(actions.undo).toHaveBeenCalledTimes(1);
  });

  it("returns false when there is no previous state", () => {
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

    const undo = createUndoUseCase(actions);

    expect(undo()).toBe(false);
    expect(actions.undo).toHaveBeenCalledTimes(1);
  });
});
