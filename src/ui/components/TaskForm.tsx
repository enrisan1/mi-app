import { useRef, useState } from "react";
import { useTasks } from "../hooks/useTasks";
import {
  Priority,
  type PriorityValue,
} from "../../domain/tasks/entities/Priority";

function TaskForm() {
  const { addTask } = useTasks();

  const [text, setText] = useState<string>("");
  const [priority, setPriority] = useState(Priority.medium());

  const inputRef = useRef<HTMLInputElement>(null);

  const handleAdd = () => {
    if (text.trim() === "") return;

    addTask(text, priority);
    setText("");
    setPriority(Priority.medium());

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

      <select
        value={priority.toString()}
        onChange={(e) =>
          setPriority(Priority.restore(e.target.value as PriorityValue))
        }
      >
        <option value="low">Baja</option>
        <option value="medium">Media</option>
        <option value="high">Alta</option>
      </select>

      <button onClick={handleAdd}>Añadir</button>
    </div>
  );
}

export default TaskForm;
