import { describe, it, expect, vi } from "vitest";
import { createToggleAllUseCase } from "../application/tasks/useCases/toggleAll";
import type { TaskActions } from "../application/tasks/taskActions.types";

describe("createToggleAllUseCase", () => {
  it("should mark all tasks as completed when there are pending tasks", () => {
    // Arrange
    const actions: TaskActions = {
      addTask: vi.fn(),
      deleteTask: vi.fn(),
      toggleTask: vi.fn(),
      editTask: vi.fn(),
      clearCompleted: vi.fn(),
      markAllCompleted: vi.fn(),
      markAllPending: vi.fn(),
      hasPendingTasks: vi.fn(() => true),
    };

    const toggleAll = createToggleAllUseCase(actions);

    // Act
    toggleAll();

    // Assert
    expect(actions.markAllCompleted).toHaveBeenCalledTimes(1);
    expect(actions.markAllPending).not.toHaveBeenCalled();
  });

  it("should mark all tasks as completed when there are pending tasks", () => {
    // Arrange
    const actions: TaskActions = {
      addTask: vi.fn(),
      deleteTask: vi.fn(),
      toggleTask: vi.fn(),
      editTask: vi.fn(),
      clearCompleted: vi.fn(),
      markAllCompleted: vi.fn(),
      markAllPending: vi.fn(),
      hasPendingTasks: vi.fn(() => false),
    };

    const toggleAll = createToggleAllUseCase(actions);

    // Act
    toggleAll();

    // Assert
    expect(actions.markAllPending).toHaveBeenCalledTimes(1);
    expect(actions.markAllCompleted).not.toHaveBeenCalled();
  });
});
