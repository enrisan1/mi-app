import type { Task } from "../task";

export const localStorageTaskRepository = {
  save(tasks: Task[]) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  },

  clear() {
    localStorage.removeItem("tasks");
  },
};
