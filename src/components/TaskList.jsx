import TaskItem from "./TaskItem";

function TaskList({ tasks, allTasks, setTasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={() => {
            setTasks(allTasks.filter((t) => t.id !== task.id));
          }}
          onToggle={() => {
            const updatedTasks = allTasks.map((t) => {
              if (t.id === task.id) {
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
