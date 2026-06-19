function TaskItem({ task, onDelete, onToggle }) {
  return (
    <li>
      <input type="checkbox" checked={task.completed} onChange={onToggle} />

      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.text}
      </span>

      <button onClick={onDelete}>❌</button>
    </li>
  );
}

export default TaskItem;
