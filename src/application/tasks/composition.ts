import { taskActions } from "./taskActions";
import { createAddTaskUseCase } from "./useCases/addTask";
import { createToggleTaskUseCase } from "./useCases/toggleTask";
import { createDeleteTaskUseCase } from "./useCases/deleteTask";
import { createEditTaskUseCase } from "./useCases/editTask";
import { createClearCompletedUseCase } from "./useCases/clearCompleted";
import { createMarkAllCompletedUseCase } from "./useCases/markAllCompleted";
import { createMarkAllPendingUseCase } from "./useCases/markAllPending";

export const markAllCompletedUseCase =
  createMarkAllCompletedUseCase(taskActions);

export const markAllPendingUseCase = createMarkAllPendingUseCase(taskActions);

export const addTaskUseCase = createAddTaskUseCase(taskActions);

export const toggleTaskUseCase = createToggleTaskUseCase(taskActions);

export const deleteTaskUseCase = createDeleteTaskUseCase(taskActions);

export const editTaskUseCase = createEditTaskUseCase(taskActions);

export const clearCompletedUseCase = createClearCompletedUseCase(taskActions);
