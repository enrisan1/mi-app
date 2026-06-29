import TaskItem from "./TaskItem";
import { useTasksContext } from "../hooks/useTasksContext";

function TaskList() {
  const { filteredTasks, deleteTask, toggleTask, editTask } = useTasksContext();

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
