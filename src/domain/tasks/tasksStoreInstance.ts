import { createTasksStore } from "./tasksStore";
import { localStorageTaskRepository } from "./repository/localStorageTaskRepository";

export const tasksStore = createTasksStore(localStorageTaskRepository);
