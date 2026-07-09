export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export function createTask(text: string): Task {
  const trimmed = text.trim();

  if (!trimmed) {
    throw new Error("Task text cannot be empty");
  }

  return {
    id: crypto.randomUUID(),
    text: trimmed,
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
  const trimmed = text.trim();

  if (!trimmed) {
    throw new Error("Task text cannot be empty");
  }

  return {
    ...task,
    text: trimmed,
  };
}
