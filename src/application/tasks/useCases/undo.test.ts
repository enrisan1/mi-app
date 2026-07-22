import { describe, it, expect, vi } from "vitest";
import { undo } from "./undo";
import type { TaskActions } from "../taskActions.types";

describe("undo", () => {
  it("should call undo when canUndo returns true", () => {
    const actions: TaskActions = {
      addTask: vi.fn(),
      deleteTask: vi.fn(),
      toggleTask: vi.fn(),
      editTask: vi.fn(),
      changePriority: vi.fn(), // Añadido
      clearCompleted: vi.fn(),
      markAllCompleted: vi.fn(),
      markAllPending: vi.fn(),
      hasPendingTasks: vi.fn().mockReturnValue(false),
      undo: vi.fn(),
      redo: vi.fn(),
      canUndo: vi.fn().mockReturnValue(true), // Añadido
      canRedo: vi.fn().mockReturnValue(false), // Añadido
      hasUndo: vi.fn().mockReturnValue(true),
      hasRedo: vi.fn().mockReturnValue(false),
    };

    undo(actions);
    expect(actions.undo).toHaveBeenCalled();
  });

  it("should not call undo when canUndo returns false", () => {
    const actions: TaskActions = {
      addTask: vi.fn(),
      deleteTask: vi.fn(),
      toggleTask: vi.fn(),
      editTask: vi.fn(),
      changePriority: vi.fn(), // Añadido
      clearCompleted: vi.fn(),
      markAllCompleted: vi.fn(),
      markAllPending: vi.fn(),
      hasPendingTasks: vi.fn().mockReturnValue(false),
      undo: vi.fn(),
      redo: vi.fn(),
      canUndo: vi.fn().mockReturnValue(false), // Añadido
      canRedo: vi.fn().mockReturnValue(false), // Añadido
      hasUndo: vi.fn().mockReturnValue(false),
      hasRedo: vi.fn().mockReturnValue(false),
    };

    undo(actions);
    expect(actions.undo).not.toHaveBeenCalled();
  });
});
