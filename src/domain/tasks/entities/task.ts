import { TaskId } from "./taskId";
import { TaskStatus } from "./taskStatus";
import { TaskText } from "./taskText";

export class Task {
  constructor(
    public readonly id: string,
    public readonly text: string,
    public readonly completed: boolean,
  ) {}
}

export function createTask(text: string): Task {
  const taskText = TaskText.create(text);

  return new Task(
    TaskId.create().toString(),
    taskText.getValue(),
    TaskStatus.pending().getValue(),
  );
}

export function toggleTask(task: Task): Task {
  return new Task(
    task.id,
    task.text,
    TaskStatus.from(task.completed).toggle().getValue(),
  );
}

export function renameTask(task: Task, text: string): Task {
  const taskText = TaskText.create(text);

  return new Task(task.id, taskText.getValue(), task.completed);
}
