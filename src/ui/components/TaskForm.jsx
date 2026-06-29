import { useState, useRef } from "react";
import { useTasksContext } from "../hooks/useTasksContext";

function TaskForm() {
  const { addTask } = useTasksContext();

  const [text, setText] = useState("");
  const inputRef = useRef(null);

  const handleAdd = () => {
    if (text.trim() === "") return;

    addTask(text);
    setText("");
    inputRef.current?.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe una tarea"
      />

      <button onClick={handleAdd}>Añadir</button>
    </div>
  );
}

export default TaskForm;
