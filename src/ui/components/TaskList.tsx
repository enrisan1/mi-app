import type { Task } from "../../domain/tasks/entities/task";
import type { Priority } from "../../domain/tasks/entities/Priority";
import { TaskItem } from "./TaskItem";

type Props = {
  tasks: Task[];
  deleteTask(id: string): void;
  toggleTask(id: string): void;
  editTask(id: string, text: string): void;
  changePriority(id: string, priority: Priority): void;
};

function TaskList({
  tasks,
  deleteTask,
  toggleTask,
  editTask,
  changePriority,
}: Props) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id.toString()}>
          <TaskItem
            task={task}
            onDelete={deleteTask}
            onToggle={toggleTask}
            onEdit={editTask}
            onChangePriority={changePriority}
          />
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
