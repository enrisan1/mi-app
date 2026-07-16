interface TaskActionsProps {
  onToggleAll: () => void;
  onClearCompleted: () => void;
  onUndo: () => void;

  hasCompletedTasks: boolean;
  hasPendingTasks: boolean;
  hasUndo: boolean;
}

export default function TaskActions({
  onToggleAll,
  onClearCompleted,
  onUndo,
  hasCompletedTasks,
  hasPendingTasks,
  hasUndo,
}: TaskActionsProps) {
  return (
    <div className="task-actions">
      <button onClick={onUndo} disabled={!hasUndo}>
        Undo
      </button>

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
