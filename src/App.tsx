import { useLocalStorage } from "./hooks/useLocalStorage";
import { useTasks } from "./ui/hooks/useTasks";
import TaskForm from "./ui/components/TaskForm";
import TaskFilters from "./ui/components/TaskFilters";
import TaskList from "./ui/components/TaskList";
import TaskActions from "./ui/components/TaskActions";
import type { TaskFilter } from "./domain/tasks/taskFilter";
import "./App.css";

function App() {
  const [filter, setFilter] = useLocalStorage<TaskFilter>(
    "selected-filter",
    "all",
  );

  const {
    visibleTasks,
    totalTasks,
    pendingTasks,
    completedTasks,
    hasPendingTasks,
    hasCompletedTasks,
    deleteTask,
    toggleTask,
    editTask,
    toggleAll,
    clearCompleted,
    undo,
    hasUndo,
    redo,
    hasRedo,
  } = useTasks(filter);

  return (
    <div className="app">
      <h1>Todo App</h1>

      <div className="stats">
        <p>Total: {totalTasks}</p>
        <p>Completadas: {completedTasks}</p>
        <p>Pendientes: {pendingTasks}</p>
      </div>

      <TaskForm />

      <TaskFilters filter={filter} onFilterChange={setFilter} />

      <TaskList
        tasks={visibleTasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        editTask={editTask}
      />

      <TaskActions
        onToggleAll={toggleAll}
        onClearCompleted={clearCompleted}
        hasCompletedTasks={hasCompletedTasks}
        hasPendingTasks={hasPendingTasks}
        onUndo={undo}
        hasUndo={hasUndo()}
        onRedo={redo}
        hasRedo={hasRedo()}
      />
    </div>
  );
}

export default App;
