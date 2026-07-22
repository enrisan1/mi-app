import { describe, it, expect, vi } from "vitest";
import { redo } from "./redo";
import type { TaskActions } from "../taskActions.types";

describe("redo", () => {
  it("should call redo when canRedo returns true", () => {
    const actions: TaskActions = {
      addTask: vi.fn(),
      deleteTask: vi.fn(),
      toggleTask: vi.fn(),
      editTask: vi.fn(),
      changePriority: vi.fn(),
      clearCompleted: vi.fn(),
      markAllCompleted: vi.fn(),
      markAllPending: vi.fn(),
      hasPendingTasks: vi.fn().mockReturnValue(false),
      undo: vi.fn(),
      redo: vi.fn(),
      canUndo: vi.fn().mockReturnValue(true),
      canRedo: vi.fn().mockReturnValue(true),
      hasUndo: vi.fn().mockReturnValue(true),
      hasRedo: vi.fn().mockReturnValue(true),
    };

    redo(actions);
    expect(actions.redo).toHaveBeenCalled();
  });

  it("should not call redo when canRedo returns false", () => {
    const actions: TaskActions = {
      addTask: vi.fn(),
      deleteTask: vi.fn(),
      toggleTask: vi.fn(),
      editTask: vi.fn(),
      changePriority: vi.fn(),
      clearCompleted: vi.fn(),
      markAllCompleted: vi.fn(),
      markAllPending: vi.fn(),
      hasPendingTasks: vi.fn().mockReturnValue(false),
      undo: vi.fn(),
      redo: vi.fn(),
      canUndo: vi.fn().mockReturnValue(false),
      canRedo: vi.fn().mockReturnValue(false),
      hasUndo: vi.fn().mockReturnValue(false),
      hasRedo: vi.fn().mockReturnValue(false),
    };

    redo(actions);
    expect(actions.redo).not.toHaveBeenCalled();
  });
});
