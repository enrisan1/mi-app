import { Task } from "../../domain/tasks/entities/task";
import type { StoredTask } from "./storedTask";

const KEY = "tasks";

export const localStorageTaskRepository = {
  save(tasks: Task[]) {
    const storedTasks: StoredTask[] = tasks.map((task) => ({
      id: task.id.toString(),
      text: task.text.toString(),
      completed: task.completed,
      priority: task.priority.toString(),
    }));
    localStorage.setItem(KEY, JSON.stringify(storedTasks));
  },

  load(): Task[] {
    const data = localStorage.getItem(KEY);

    if (!data) {
      return [];
    }

    const storedTasks: StoredTask[] = JSON.parse(data);

    return storedTasks.map(Task.restore);
  },
};
