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
        />
      ))}
    </ul>
  );
}

export default TaskList;
