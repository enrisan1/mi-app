import { useMemo, useState } from "react";
import { useTasks } from "./ui/hooks/useTasks";
import TaskForm from "./ui/components/TaskForm";
import TaskList from "./ui/components/TaskList";
import "./App.css";

type Filter = "all" | "pending" | "completed";

function App() {
  const [filter, setFilter] = useState<Filter>("all");

  const { tasks, addTask, deleteTask, toggleTask, editTask, clearCompleted } =
    useTasks();

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case "completed":
        return tasks.filter((t) => t.completed);

      case "pending":
        return tasks.filter((t) => !t.completed);

      default:
        return tasks;
    }
  }, [tasks, filter]);

  // Estadísticas sobre TODAS las tareas
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="app">
      <h1>Todo App</h1>

      <div className="stats">
        <p>Total: {totalTasks}</p>
        <p>Completadas: {completedTasks}</p>
        <p>Pendientes: {pendingTasks}</p>
      </div>

      <TaskForm />

      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        editTask={editTask}
      />

      <div className="filters">
        <button onClick={() => setFilter("all")}>
          Todos {filter === "all" && "✓"}
        </button>

        <button onClick={() => setFilter("pending")}>
          Pendientes {filter === "pending" && "✓"}
        </button>

        <button onClick={() => setFilter("completed")}>
          Completadas {filter === "completed" && "✓"}
        </button>
      </div>

      <button onClick={clearCompleted}>Eliminar completadas</button>
    </div>
  );
}

export default App;
