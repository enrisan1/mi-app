// TaskItem.tsx
import type { Task } from "../../domain/tasks/entities/task";
import TaskItem from "./TaskItem";

type Props = {
  tasks: Task[];
  deleteTask(id: string): void;
  toggleTask(id: string): void;
  editTask(id: string, text: string): void;
};

function TaskList({ tasks, deleteTask, toggleTask, editTask }: Props) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={deleteTask}
          onToggle={toggleTask}
          onEdit={editTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
