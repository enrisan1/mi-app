import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import TaskItem from "../components/TaskItem";

describe("TaskItem", () => {
  const task = {
    id: 1,
    text: "Aprender React Testing Library",
    completed: false,
  };

  it("muestra el texto de la tarea", () => {
    render(
      <TaskItem
        task={task}
        onDelete={vi.fn()}
        onToggle={vi.fn()}
        onEdit={vi.fn()}
      />,
    );

    expect(
      screen.getByText("Aprender React Testing Library"),
    ).toBeInTheDocument();
  });

  it("llama a onToggle al marcar el checkbox", () => {
    const onToggle = vi.fn();

    render(
      <TaskItem
        task={task}
        onDelete={vi.fn()}
        onToggle={onToggle}
        onEdit={vi.fn()}
      />,
    );

    const checkbox = screen.getByRole("checkbox");

    fireEvent.click(checkbox);

    expect(onToggle).toHaveBeenCalledWith(1);
  });

  it("llama a onDelete al pulsar eliminar", () => {
    const onDelete = vi.fn();

    render(
      <TaskItem
        task={task}
        onDelete={onDelete}
        onToggle={vi.fn()}
        onEdit={vi.fn()}
      />,
    );

    const deleteButton = screen.getByText("❌");

    fireEvent.click(deleteButton);

    expect(onDelete).toHaveBeenCalledWith(1);
  });

  it("entra en modo edición al pulsar editar", () => {
    render(
      <TaskItem
        task={task}
        onDelete={vi.fn()}
        onToggle={vi.fn()}
        onEdit={vi.fn()}
      />,
    );

    const editButton = screen.getByText("✏️");

    fireEvent.click(editButton);

    expect(screen.getByDisplayValue(task.text)).toBeInTheDocument();
  });

  it("guarda una tarea editada", () => {
    const onEdit = vi.fn();

    render(
      <TaskItem
        task={task}
        onDelete={vi.fn()}
        onToggle={vi.fn()}
        onEdit={onEdit}
      />,
    );

    fireEvent.click(screen.getByText("✏️"));

    const input = screen.getByDisplayValue(task.text);

    fireEvent.change(input, {
      target: {
        value: "Nuevo texto",
      },
    });

    fireEvent.click(screen.getByText("💾"));

    expect(onEdit).toHaveBeenCalledWith(1, "Nuevo texto");
  });
});
