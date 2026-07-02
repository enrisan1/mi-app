import { useState, useRef } from "react";
import { useTasks } from "../hooks/useTasks";

function TaskForm() {
  const { addTask } = useTasks();

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
