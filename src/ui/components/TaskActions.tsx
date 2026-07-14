interface TaskActionsProps {
  onToggleAll: () => void;
  onClearCompleted: () => void;

  hasCompletedTasks: boolean;
  hasPendingTasks: boolean;
}

export default function TaskActions({
  onToggleAll,
  onClearCompleted,
  hasCompletedTasks,
  hasPendingTasks,
}: TaskActionsProps) {
  return (
    <div className="task-actions">
      <button
        onClick={onToggleAll}
        disabled={!hasPendingTasks && !hasCompletedTasks}
      >
        {hasPendingTasks ? "Marcar todas" : "Marcar todas como pendientes"}
      </button>

      <button onClick={onClearCompleted} disabled={!hasCompletedTasks}>
        Limpiar completadas
      </button>
    </div>
  );
}
