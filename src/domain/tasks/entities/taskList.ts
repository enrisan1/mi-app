import { Task } from "./task";
import { TaskId } from "./taskId";
import { TaskText } from "./taskText";

export class TaskList {
  private constructor(private readonly tasks: readonly Task[]) {
    const ids = new Set(tasks.map((task) => task.id.toString()));

    if (ids.size !== tasks.length) {
      throw new Error("TaskList cannot contain duplicated task ids.");
    }
  }

  static empty(): TaskList {
    return new TaskList([]);
  }

  static from(tasks: readonly Task[]): TaskList {
    return new TaskList(tasks);
  }

  getItems(): readonly Task[] {
    return this.tasks;
  }

  add(task: Task): TaskList {
    return new TaskList([...this.tasks, task]);
  }

  remove(id: TaskId): TaskList {
    return new TaskList(
      this.tasks.filter((task) => task.id.toString() !== id.toString()),
    );
  }

  toggle(id: TaskId): TaskList {
    return new TaskList(
      this.tasks.map((task) =>
        task.id.toString() === id.toString() ? task.toggle() : task,
      ),
    );
  }

  rename(id: TaskId, text: TaskText): TaskList {
    return new TaskList(
      this.tasks.map((task) =>
        task.id.toString() === id.toString() ? task.rename(text) : task,
      ),
    );
  }

  clearCompleted(): TaskList {
    return new TaskList(this.tasks.filter((task) => !task.completed));
  }
}
