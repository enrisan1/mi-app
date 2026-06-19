import { useState, useEffect } from "react";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  let filteredTasks = tasks;
  if (filter === "pending") {
    filteredTasks = tasks.filter((task) => !task.completed);
  }

  if (filter === "completed") {
    filteredTasks = tasks.filter((task) => task.completed);
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>ToDo App 📝</h1>
      <div>
        <button onClick={() => setFilter("all")}>Todas</button>

        <button onClick={() => setFilter("pending")}>Pendientes</button>

        <button onClick={() => setFilter("completed")}>Completadas</button>
      </div>
      <TaskForm
        task={task}
        setTask={setTask}
        tasks={tasks}
        setTasks={setTasks}
      />

      <TaskList tasks={filteredTasks} allTasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
