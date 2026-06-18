import { useState, useEffect } from "react";

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

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Escribe una tarea"
      />
      <button
        onClick={() => {
          if (task.trim() === "") return;

          setTasks([...tasks, task]);
          setTask("");
        }}
      >
        Añadir
      </button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}

            <button
              onClick={() => {
                setTasks(tasks.filter((_, i) => i !== index));
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
