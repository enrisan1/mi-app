interface TaskActionsProps {
  onMarkAllCompleted: () => void;
  onClearCompleted: () => void;
}

export default function TaskActions({
  onMarkAllCompleted,
  onClearCompleted,
}: TaskActionsProps) {
  return (
    <div className="task-actions">
      <button onClick={onMarkAllCompleted}>Marcar todas</button>

      <button onClick={onClearCompleted}>Limpiar completadas</button>
    </div>
  );
}
