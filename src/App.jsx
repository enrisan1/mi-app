import { useState, useEffect } from "react";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div style={{ padding: 20 }}>
      <h1>ToDo App 📝</h1>

      <TaskForm
        task={task}
        setTask={setTask}
        tasks={tasks}
        setTasks={setTasks}
      />

      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
