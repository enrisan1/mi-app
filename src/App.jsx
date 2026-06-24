import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { useTasks } from "./hooks/useTasks";
import { useDocumentTitle } from "./hooks/useDocumentTitle";

function App() {
  const {
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
  } = useTasks();

  const title = pendingTasks > 0 ? `(${pendingTasks}) ToDo App` : "ToDo App";

  useDocumentTitle(title);

  return (
    <div>
      <h1>ToDo App</h1>

      <p>
        Total: {totalTasks} | Pendientes: {pendingTasks} | Completadas:{" "}
        {completedTasks}
      </p>

      <TaskForm addTask={addTask} />

      <div>
        <button onClick={() => setFilter("all")}>Todas</button>
        <button onClick={() => setFilter("pending")}>Pendientes</button>
        <button onClick={() => setFilter("completed")}>Completadas</button>

        <button onClick={clearCompleted}>Eliminar completadas</button>
      </div>

      <TaskList
        tasks={filteredTasks}
        onDelete={deleteTask}
        onToggle={toggleTask}
        onEdit={editTask}
      />
    </div>
  );
}

export default App;
