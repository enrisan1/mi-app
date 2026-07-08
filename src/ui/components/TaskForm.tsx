import { useRef, useState } from "react";
import { useTasks } from "../hooks/useTasks";

function TaskForm() {
  const { addTask } = useTasks();

  const [text, setText] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

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
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value)
        }
        placeholder="Escribe una tarea"
      />

      <button onClick={handleAdd}>
        Añadir
      </button>
    </div>
  );
}

export default TaskForm;