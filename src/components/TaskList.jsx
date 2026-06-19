import TaskItem from "./TaskItem";

function TaskList({ tasks, setTasks }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onDelete={() => {
            setTasks(tasks.filter((_, i) => i !== index));
          }}
          onToggle={() => {
            const updatedTasks = tasks.map((t, i) => {
              if (i === index) {
                return {
                  ...t,
                  completed: !t.completed,
                };
              }

              return t;
            });

            setTasks(updatedTasks);
          }}
        />
      ))}
    </ul>
  );
}

export default TaskList;
