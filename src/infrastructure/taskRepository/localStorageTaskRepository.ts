import type { Task } from "../task";

const KEY = "tasks";

export const localStorageTaskRepository = {
  save(tasks: Task[]) {
    localStorage.setItem(KEY, JSON.stringify(tasks));
  },

  load(): Task[] {
    const data = localStorage.getItem(KEY);
    return data ? JSON.parse(data) : [];
  },

  clear() {
    localStorage.removeItem(KEY);
  },
};
