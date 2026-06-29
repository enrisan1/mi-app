import TaskForm from "./ui/components/TaskForm";
import TaskList from "./ui/components/TaskList";
import { useTasksContext } from "./ui/hooks/useTasksContext";
import { useDocumentTitle } from "./hooks/useDocumentTitle";

function App() {
  const {
    setFilter,
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

      <TaskForm />

      <div>
        <button onClick={() => setFilter("all")}>Todas</button>
        <button onClick={() => setFilter("pending")}>Pendientes</button>
        <button onClick={() => setFilter("completed")}>Completadas</button>

        <button onClick={clearCompleted}>Eliminar completadas</button>
      </div>

      <TaskList />
    </div>
  );
}

export default App;
