import { taskActions } from "./tasksStore";

import { createAddTaskUseCase } from "../../application/tasks/useCases/addTask";
import { createToggleTaskUseCase } from "./useCases/toggleTask";
import { createDeleteTaskUseCase } from "./useCases/deleteTask";
import { createEditTaskUseCase } from "./useCases/editTask";
import { createClearCompletedUseCase } from "./useCases/clearCompleted";

export const addTaskUseCase = createAddTaskUseCase(taskActions);

export const toggleTaskUseCase = createToggleTaskUseCase(taskActions);

export const deleteTaskUseCase = createDeleteTaskUseCase(taskActions);

export const editTaskUseCase = createEditTaskUseCase(taskActions);

export const clearCompletedUseCase = createClearCompletedUseCase(taskActions);
