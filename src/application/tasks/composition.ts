import { taskActions } from "../../domain/tasks/tasksStore";
import { createAddTaskUseCase } from "./useCases/addTask";
import { createToggleTaskUseCase } from "./useCases/toggleTask";
import { createDeleteTaskUseCase } from "../../application/tasks/useCases/deleteTask";
import { createEditTaskUseCase } from "../../application/tasks/useCases/editTask";
import { createClearCompletedUseCase } from "../../application/tasks/useCases/clearCompleted";

export const addTaskUseCase = createAddTaskUseCase(taskActions);

export const toggleTaskUseCase = createToggleTaskUseCase(taskActions);

export const deleteTaskUseCase = createDeleteTaskUseCase(taskActions);

export const editTaskUseCase = createEditTaskUseCase(taskActions);

export const clearCompletedUseCase = createClearCompletedUseCase(taskActions);
