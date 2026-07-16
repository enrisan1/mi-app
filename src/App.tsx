import { useLocalStorage } from "./hooks/useLocalStorage";
import { useTasks } from "./ui/hooks/useTasks";
import TaskForm from "./ui/components/TaskForm";
import TaskFilters from "./ui/components/TaskFilters";
import TaskList from "./ui/components/TaskList";
import TaskActions from "./ui/components/TaskActions";
import type { TaskFilter } from "./domain/tasks/taskFilter";
import {
  selectVisibleTasks,
  selectTotalTasks,
  selectCompletedCount,
  selectPendingCount,
} from "./domain/tasks/tasksSelectors";
import "./App.css";

function App() {
  const [filter, setFilter] = useLocalStorage<TaskFilter>(
    "selected-filter",
    "all",
  );

  const {
    tasks,
    deleteTask,
    toggleTask,
    editTask,
    toggleAll,
    hasPendingTasks,
    clearCompleted,
    undo,
    hasUndo,
  } = useTasks();

  const filteredTasks = selectVisibleTasks(tasks, filter);

  // Estadísticas
  const totalTasks = selectTotalTasks(tasks);
  const completedTasks = selectCompletedCount(tasks);
  const pendingTasks = selectPendingCount(tasks);

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
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        editTask={editTask}
      />

      <TaskActions
        onToggleAll={toggleAll}
        onClearCompleted={clearCompleted}
        hasCompletedTasks={completedTasks > 0}
        hasPendingTasks={hasPendingTasks}
        onUndo={undo}
        hasUndo={hasUndo()}
      />
    </div>
  );
}

export default App;
