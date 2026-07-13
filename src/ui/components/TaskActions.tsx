interface TaskActionsProps {
  onMarkAllCompleted: () => void;
  onClearCompleted: () => void;
  onMarkAllPending: () => void;
}

export default function TaskActions({
  onMarkAllCompleted,
  onClearCompleted,
  onMarkAllPending,
}: TaskActionsProps) {
  return (
    <div className="task-actions">
      <button onClick={onMarkAllCompleted}>Marcar todas</button>

      <button onClick={onClearCompleted}>Limpiar completadas</button>

      <button onClick={onMarkAllPending}>Marcar todas como pendientes</button>
    </div>
  );
}
