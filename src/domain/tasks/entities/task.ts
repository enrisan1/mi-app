import { TaskId } from "./taskId";
import { TaskText } from "./taskText";
import { Priority, type PriorityValue } from "./Priority";

export class Task {
  constructor(
    public readonly id: TaskId,
    public readonly text: TaskText,
    public readonly completed: boolean,
    public readonly priority: Priority,
  ) {}

  static create(text: string, priority: Priority = Priority.medium()): Task {
    return new Task(TaskId.create(), TaskText.create(text), false, priority);
  }

  static restore(data: {
    id: string;
    text: string;
    completed: boolean;
    priority?: PriorityValue;
  }): Task {
    return new Task(
      TaskId.from(data.id),
      TaskText.create(data.text),
      data.completed,
      data.priority ? Priority.restore(data.priority) : Priority.medium(),
    );
  }

  toggle(): Task {
    return new Task(this.id, this.text, !this.completed, this.priority);
  }

  complete(): Task {
    return this.completed
      ? this
      : new Task(this.id, this.text, true, this.priority);
  }

  rename(text: TaskText): Task {
    return new Task(this.id, text, this.completed, this.priority);
  }

  uncomplete(): Task {
    return new Task(this.id, this.text, false, this.priority);
  }
}
