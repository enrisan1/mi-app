function TaskForm({ task, setTask, tasks, setTasks }) {
  return (
    <>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Escribe una tarea"
      />

      <button
        onClick={() => {
          if (task.trim() === "") return;

          setTasks([
            ...tasks,
            {
              text: task,
              completed: false,
            },
          ]);

          setTask("");
        }}
      >
        Añadir
      </button>
    </>
  );
}

export default TaskForm;
