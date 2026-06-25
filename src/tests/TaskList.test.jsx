import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import TaskList from "../components/TaskList";

describe("TaskList", () => {
  const tasks = [
    {
      id: 1,
      text: "Primera tarea",
      completed: false,
    },
    {
      id: 2,
      text: "Segunda tarea",
      completed: true,
    },
  ];

  it("muestra las tareas recibidas", () => {
    render(
      <TaskList
        tasks={tasks}
        onDelete={vi.fn()}
        onToggle={vi.fn()}
        onEdit={vi.fn()}
      />,
    );

    expect(screen.getByText("Primera tarea")).toBeInTheDocument();
    expect(screen.getByText("Segunda tarea")).toBeInTheDocument();
  });

  it("renderiza un TaskItem por cada tarea", () => {
    render(
      <TaskList
        tasks={tasks}
        onDelete={vi.fn()}
        onToggle={vi.fn()}
        onEdit={vi.fn()}
      />,
    );

    const items = screen.getAllByRole("listitem");

    expect(items).toHaveLength(2);
  });
});
