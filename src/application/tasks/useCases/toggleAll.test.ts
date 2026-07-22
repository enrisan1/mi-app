import { createToggleAllUseCase } from "./toggleAll";
import type { TaskActions } from "../taskActions.types";
import { Priority } from "../../../domain/tasks/entities/Priority";
import { describe, expect, it, vi } from "vitest";

describe("createToggleAllUseCase", () => {
  it("should mark all as completed when there are pending tasks", () => {
    const markAllCompletedMock = vi.fn();
    const markAllPendingMock = vi.fn();

    const taskActions: TaskActions = {
      hasPendingTasks: vi.fn().mockReturnValue(true),
      markAllCompleted: markAllCompletedMock,
      markAllPending: markAllPendingMock,
      addTask: vi.fn(),
      deleteTask: vi.fn(),
      toggleTask: vi.fn(),
      editTask: vi.fn(),
      changePriority: vi.fn(),
      clearCompleted: vi.fn(),
      undo: vi.fn(),
      redo: vi.fn(),
      canUndo: vi.fn(),
      canRedo: vi.fn(),
      hasUndo: vi.fn(),
      hasRedo: vi.fn(),
    };

    const toggleAll = createToggleAllUseCase(taskActions);
    toggleAll();

    expect(markAllCompletedMock).toHaveBeenCalled();
    expect(markAllPendingMock).not.toHaveBeenCalled();
  });

  it("should mark all as pending when there are no pending tasks", () => {
    const markAllCompletedMock = vi.fn();
    const markAllPendingMock = vi.fn();

    const taskActions: TaskActions = {
      hasPendingTasks: vi.fn().mockReturnValue(false),
      markAllCompleted: markAllCompletedMock,
      markAllPending: markAllPendingMock,
      addTask: vi.fn(),
      deleteTask: vi.fn(),
      toggleTask: vi.fn(),
      editTask: vi.fn(),
      changePriority: vi.fn(),
      clearCompleted: vi.fn(),
      undo: vi.fn(),
      redo: vi.fn(),
      canUndo: vi.fn(),
      canRedo: vi.fn(),
      hasUndo: vi.fn(),
      hasRedo: vi.fn(),
    };

    const toggleAll = createToggleAllUseCase(taskActions);
    toggleAll();

    expect(markAllPendingMock).toHaveBeenCalled();
    expect(markAllCompletedMock).not.toHaveBeenCalled();
  });
});
