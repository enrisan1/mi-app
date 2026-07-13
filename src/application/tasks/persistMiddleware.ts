import { localStorageTaskRepository } from "../../infrastructure/taskRepository/localStorageTaskRepository";
import type { Middleware } from "../../store/types";
import type { Task } from "../../domain/tasks/entities/task";
import type { TaskAction } from "../../domain/tasks/tasksReducer";

export const persistMiddleware =
  (): Middleware<Task[], TaskAction> => (store) => (next) => (action) => {
    next(action);

    localStorageTaskRepository.save(store.getState());
  };
