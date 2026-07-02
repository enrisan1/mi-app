import { useState } from "react";
import { useTasks } from "./ui/hooks/useTasks";
import TaskForm from "./ui/components/TaskForm";
import TaskList from "./ui/components/TaskList";
import {
  selectFilteredTasks,
  selectStats,
  type Filter,
} from "./domain/tasks/taskSelectors";

import "./App.css";

function App() {
  const { state, addTask, deleteTask, toggleTask, editTask, clearCompleted } =
    useTasks();

  const [filter, setFilter] = useState<Filter>("all");

  const filteredTasks = selectFilteredTasks(state, filter);
  const { total, completed, pending } = selectStats(state);

  return (
    <div className="app">
      <h1>Todo App</h1>

      <div className="stats">
        <p>Total: {total}</p>
        <p>Completadas: {completed}</p>
        <p>Pendientes: {pending}</p>
      </div>

      <TaskForm addTask={addTask} />

      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        editTask={editTask}
      />

      <div className="filters">
        <button onClick={() => setFilter("all")}>Todos</button>
        <button onClick={() => setFilter("pending")}>Pendientes</button>
        <button onClick={() => setFilter("completed")}>Completados</button>
      </div>

      <button onClick={clearCompleted}>Eliminar completadas</button>
    </div>
  );
}

export default App;