import { TaskText } from "./taskText";
export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export function createTask(text: string): Task {
  const taskText = TaskText.create(text);

  return {
    id: crypto.randomUUID(),
    text: taskText.getValue(),
    completed: false,
  };
}

export function toggleTask(task: Task): Task {
  return {
    ...task,
    completed: !task.completed,
  };
}

export function renameTask(task: Task, text: string): Task {
  const taskText = TaskText.create(text);

  return {
    ...task,
    text: taskText.getValue(),
  };
}
