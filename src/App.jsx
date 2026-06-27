import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { useTasksContext } from "./context/TasksContext";
import { useDocumentTitle } from "./hooks/useDocumentTitle";

function App() {
  const {
    tasks,
    filteredTasks,
    filter,
    setFilter,
    addTask,
    deleteTask,
    toggleTask,
    editTask,
    clearCompleted,
    totalTasks,
    pendingTasks,
    completedTasks,
  } = useTasksContext();

  const title = pendingTasks > 0 ? `(${pendingTasks}) ToDo App` : "ToDo App";

  useDocumentTitle(title);

  return (
    <div>
      <h1>ToDo App</h1>

      <p>
        Total: {totalTasks} | Pendientes: {pendingTasks} | Completadas:{" "}
        {completedTasks}
      </p>
      <TasksProvider>
        <TaskForm />

        <div>
          <button onClick={() => setFilter("all")}>Todas</button>
          <button onClick={() => setFilter("pending")}>Pendientes</button>
          <button onClick={() => setFilter("completed")}>Completadas</button>

          <button onClick={clearCompleted}>Eliminar completadas</button>
        </div>

        <TaskList />
      </TasksProvider>
    </div>
  );
}

export default App;
