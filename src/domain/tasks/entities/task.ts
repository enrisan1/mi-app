import { TaskId } from "./taskId";
import { TaskStatus } from "./taskStatus";
import { TaskText } from "./taskText";
export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export function createTask(text: string): Task {
  const taskText = TaskText.create(text);

  return {
    id: TaskId.create().toString(),
    text: taskText.getValue(),
    completed: TaskStatus.pending().getValue(),
  };
}

export function toggleTask(task: Task): Task {
  return {
    ...task,
    completed: TaskStatus.from(task.completed).toggle().getValue(),
  };
}

export function renameTask(task: Task, text: string): Task {
  const taskText = TaskText.create(text);

  return {
    ...task,
    text: taskText.getValue(),
  };
}
