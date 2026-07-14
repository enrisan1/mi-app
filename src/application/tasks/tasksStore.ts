import { createStore } from "../../store/createStore";
import type { Task } from "../../domain/tasks/entities/task";
import { localStorageTaskRepository } from "../../infrastructure/taskRepository/localStorageTaskRepository";
import { loggerMiddleware } from "../../store/middleware/loggerMiddleware";
import { tasksReducer, type TaskAction } from "../../domain/tasks/tasksReducer";

import { persistMiddleware } from "./persistMiddleware";

const initialState: Task[] = localStorageTaskRepository.load() ?? [];

export const tasksStore = createStore<Task[], TaskAction>(
  tasksReducer,
  initialState,
  [loggerMiddleware(), persistMiddleware()],
);
