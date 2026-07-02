import { useTasks } from "./ui/hooks/useTasks";
import TaskForm from "./ui/components/TaskForm";
import TaskList from "./ui/components/TaskList";
import "./App.css";

function App() {
  const {
    filteredTasks,
    addTask,
    deleteTask,
    toggleTask,
    editTask,
    clearCompleted,
    filter,
    setFilter,
  } = useTasks();

  const totalTasks = filteredTasks.length;
  const completedTasks = filteredTasks.filter((t) => t.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="app">
      <h1>Todo App</h1>

      <div className="stats">
        <p>Total: {totalTasks}</p>
        <p>Completadas: {completedTasks}</p>
        <p>Pendientes: {pendingTasks}</p>
      </div>

      <TaskForm addTask={addTask} />

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
          Completados {filter === "completed" && "✓"}
        </button>
      </div>

      <button onClick={clearCompleted}>Eliminar completadas</button>
    </div>
  );
}

export default App;
