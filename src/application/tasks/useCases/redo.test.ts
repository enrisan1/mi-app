import { describe, expect, it, vi } from "vitest";
import { createRedoUseCase } from "./redo";
import type { TaskActions } from "../taskActions.types";

describe("redo", () => {
  it("reapplies the next state", () => {
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

      redo: vi.fn(() => true),
      hasRedo: () => true,
    };

    const redo = createRedoUseCase(actions);

    expect(redo()).toBe(true);
    expect(actions.redo).toHaveBeenCalledTimes(1);
  });

  it("returns false when there is no next state", () => {
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

    const redo = createRedoUseCase(actions);

    expect(redo()).toBe(false);
    expect(actions.redo).toHaveBeenCalledTimes(1);
  });
});