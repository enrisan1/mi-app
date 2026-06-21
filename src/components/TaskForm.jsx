import { useState } from "react";

function TaskForm({ addTask }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;

    addTask(text);
    setText("");
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe una tarea"
      />

      <button onClick={handleAdd}>Añadir</button>
    </div>
  );
}

export default TaskForm;
