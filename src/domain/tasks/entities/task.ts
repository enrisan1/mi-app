import { TaskId } from "./taskId";
import { TaskText } from "./taskText";

export class Task {
  constructor(
    public readonly id: TaskId,
    public readonly text: TaskText,
    public readonly completed: boolean,
  ) {}

  static create(text: string): Task {
    return new Task(TaskId.create(), TaskText.create(text), false);
  }

  static restore(data: { id: string; text: string; completed: boolean }): Task {
    return new Task(
      TaskId.from(data.id),
      TaskText.create(data.text),
      data.completed,
    );
  }

  toggle(): Task {
    return new Task(this.id, this.text, !this.completed);
  }

  complete(): Task {
    return this.completed ? this : new Task(this.id, this.text, true);
  }

  rename(text: TaskText): Task {
    return new Task(this.id, text, this.completed);
  }
}
