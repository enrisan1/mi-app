interface TaskActionsProps {
  onMarkAllCompleted: () => void;
  onMarkAllPending: () => void;
  onClearCompleted: () => void;

  hasCompletedTasks: boolean;
  hasPendingTasks: boolean;
}

export default function TaskActions({
  onMarkAllCompleted,
  onMarkAllPending,
  onClearCompleted,
  hasCompletedTasks,
  hasPendingTasks,
}: TaskActionsProps) {
  return (
    <div className="task-actions">
      <button onClick={onMarkAllCompleted} disabled={!hasPendingTasks}>
        Marcar todas
      </button>

      <button onClick={onClearCompleted} disabled={!hasCompletedTasks}>
        Limpiar completadas
      </button>

      <button onClick={onMarkAllPending} disabled={!hasCompletedTasks}>
        Marcar todas como pendientes
      </button>
    </div>
  );
}
