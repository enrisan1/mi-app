import TaskItem from "./TaskItem";

function TaskList({ tasks, onDelete, onToggle, onEdit }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={() => onDelete(task.id)}
          onToggle={() => onToggle(task.id)}
          onEdit={(text) => onEdit(task.id, text)}
        />
      ))}
    </ul>
  );
}

export default TaskList;
