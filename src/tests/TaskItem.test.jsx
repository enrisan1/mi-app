import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import { TaskItem } from "../ui/components/TaskItem";
import { Task } from "../domain/tasks/entities/task";

describe("TaskItem", () => {
  const task = Task.restore({
    id: "1",
    text: "Aprender React Testing Library",
    completed: false,
  });

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

    fireEvent.click(screen.getByRole("checkbox"));

    expect(onToggle).toHaveBeenCalledWith(task.id.toString());
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

    fireEvent.click(screen.getByText("❌"));

    expect(onDelete).toHaveBeenCalledWith(task.id.toString());
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

    fireEvent.click(screen.getByText("✏️"));

    expect(screen.getByDisplayValue(task.text.toString())).toBeInTheDocument();
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

    const input = screen.getByDisplayValue(task.text.toString());

    fireEvent.change(input, {
      target: {
        value: "Nuevo texto",
      },
    });

    fireEvent.click(screen.getByText("💾"));

    expect(onEdit).toHaveBeenCalledWith(task.id.toString(), "Nuevo texto");
  });

  it("muestra una tarea pendiente sin tachado", () => {
    const task = Task.restore({
      id: "1",
      text: "Aprender React",
      completed: false,
    });

    render(
      <TaskItem
        task={task}
        onDelete={vi.fn()}
        onToggle={vi.fn()}
        onEdit={vi.fn()}
      />,
    );

    const text = screen.getByText("Aprender React");

    expect(text).toHaveStyle({
      textDecoration: "none",
    });
  });

  it("no guarda una edición vacía", () => {
    const task = Task.restore({
      id: "1",
      text: "Tarea original",
      completed: false,
    });

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

    const input = screen.getByDisplayValue(task.text.toString());

    fireEvent.change(input, {
      target: {
        value: "   ",
      },
    });

    fireEvent.click(screen.getByText("💾"));

    expect(onEdit).not.toHaveBeenCalled();
  });

  it("sale del modo edición después de guardar", () => {
    const task = Task.restore({
      id: "1",
      text: "Tarea original",
      completed: false,
    });

    render(
      <TaskItem
        task={task}
        onDelete={vi.fn()}
        onToggle={vi.fn()}
        onEdit={vi.fn()}
      />,
    );

    fireEvent.click(screen.getByText("✏️"));

    const input = screen.getByDisplayValue(task.text.toString());

    fireEvent.change(input, {
      target: {
        value: "Texto nuevo",
      },
    });

    fireEvent.click(screen.getByText("💾"));

    expect(screen.queryByDisplayValue("Texto nuevo")).not.toBeInTheDocument();
  });

  it("cancela la edición", () => {
    const task = Task.restore({
      id: "1",
      text: "Tarea original",
      completed: false,
    });

    render(
      <TaskItem
        task={task}
        onDelete={vi.fn()}
        onToggle={vi.fn()}
        onEdit={vi.fn()}
      />,
    );

    fireEvent.click(screen.getByText("✏️"));

    expect(screen.getByDisplayValue(task.text.toString())).toBeInTheDocument();

    fireEvent.click(screen.getByText("Cancelar"));

    expect(
      screen.queryByDisplayValue(task.text.toString()),
    ).not.toBeInTheDocument();

    expect(screen.getByText(task.text.toString())).toBeInTheDocument();
  });
});
