import { History } from "../history/History";
import type { Task } from "../../domain/tasks/entities/task";
import { createTaskActions } from "./taskActions";
import { tasksStore } from "./tasksStore";
import { createAddTaskUseCase } from "./useCases/addTask";
import { createToggleTaskUseCase } from "./useCases/toggleTask";
import { createDeleteTaskUseCase } from "./useCases/deleteTask";
import { createEditTaskUseCase } from "./useCases/editTask";
import { createClearCompletedUseCase } from "./useCases/clearCompleted";
import { createMarkAllCompletedUseCase } from "./useCases/markAllCompleted";
import { createMarkAllPendingUseCase } from "./useCases/markAllPending";
// import { createToggleAllUseCase } from "./useCases/toggleAll"; ← ELIMINAR
import { createUndoUseCase } from "./useCases/undo";
import { createRedoUseCase } from "../tasks/useCases/redo";
import { createChangeTaskPriorityUseCase } from "./useCases/changeTaskPriority";
import type { TaskActions } from "./taskActions.types";

const history = new History<Task[]>();

const taskActions = createTaskActions(tasksStore, history);

export function createToggleAllUseCase(taskActions: TaskActions) {
  return () => {
    if (taskActions.hasPendingTasks()) {
      taskActions.markAllCompleted();
    } else {
      taskActions.markAllPending();
    }
  };
}

export const markAllCompletedUseCase =
  createMarkAllCompletedUseCase(taskActions);

export const markAllPendingUseCase = createMarkAllPendingUseCase(taskActions);

export const toggleAllUseCase = createToggleAllUseCase(taskActions);

export const addTaskUseCase = createAddTaskUseCase(taskActions);

export const toggleTaskUseCase = createToggleTaskUseCase(taskActions);

export const deleteTaskUseCase = createDeleteTaskUseCase(taskActions);

export const editTaskUseCase = createEditTaskUseCase(taskActions);

export const clearCompletedUseCase = createClearCompletedUseCase(taskActions);

export const changeTaskPriorityUseCase =
  createChangeTaskPriorityUseCase(taskActions);

export const undoUseCase = createUndoUseCase(taskActions);
export const redoUseCase = createRedoUseCase(taskActions);

export const hasUndo = () => taskActions.hasUndo();
export const hasRedo = () => taskActions.hasRedo();
