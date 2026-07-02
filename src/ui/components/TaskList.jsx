import TaskItem from "./TaskItem";
import { useTasks } from "../hooks/useTasks";

function TaskList() {
  const { filteredTasks, deleteTask, toggleTask, editTask } = useTasks();

  return (
    <ul>
      {filteredTasks.map((task) => (
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
