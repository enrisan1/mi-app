import { useState } from "react";
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
  const [filter, setFilter] = useState<TaskFilter>("all");

  const {
    tasks,
    deleteTask,
    toggleTask,
    editTask,
    markAllCompleted,
    markAllPending,
    clearCompleted,
  } = useTasks();

  const filteredTasks = selectVisibleTasks(tasks, filter);

  // Estadísticas (las mejoraremos en la siguiente fase usando selectores)
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
        onMarkAllCompleted={markAllCompleted}
        onMarkAllPending={markAllPending}
        onClearCompleted={clearCompleted}
      />
    </div>
  );
}

export default App;
