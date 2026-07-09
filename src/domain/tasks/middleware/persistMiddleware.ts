import { localStorageTaskRepository } from "../../../infrastructure/taskRepository/localStorageTaskRepository";
import type { Middleware } from "../../../store/types";
import type { Task } from "../entities/task";
import type { TaskAction } from "../tasksReducer";

export const persistMiddleware =
  (): Middleware<Task[], TaskAction> => (store) => (next) => (action) => {
    next(action);

    localStorageTaskRepository.save(store.getState());
  };
