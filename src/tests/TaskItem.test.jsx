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

  it("muestra una tarea pendiente sin tachado", () => {
    const task = {
      id: 1,
      text: "Aprender React",
      completed: false,
    };

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
    const task = {
      id: 1,
      text: "Tarea original",
      completed: false,
    };

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

    const input = screen.getByDisplayValue("Tarea original");

    fireEvent.change(input, {
      target: {
        value: "   ",
      },
    });

    fireEvent.click(screen.getByText("💾"));

    expect(onEdit).not.toHaveBeenCalled();
  });

  it("sale del modo edición después de guardar", () => {
    const task = {
      id: 1,
      text: "Tarea original",
      completed: false,
    };

    render(
      <TaskItem
        task={task}
        onDelete={vi.fn()}
        onToggle={vi.fn()}
        onEdit={vi.fn()}
      />,
    );

    fireEvent.click(screen.getByText("✏️"));

    const input = screen.getByDisplayValue("Tarea original");

    fireEvent.change(input, {
      target: {
        value: "Texto nuevo",
      },
    });

    fireEvent.click(screen.getByText("💾"));

    expect(screen.queryByDisplayValue("Texto nuevo")).not.toBeInTheDocument();
  });

  it("cancela la edición", () => {
    const task = {
      id: 1,
      text: "Tarea original",
      completed: false,
    };

    render(
      <TaskItem
        task={task}
        onDelete={vi.fn()}
        onToggle={vi.fn()}
        onEdit={vi.fn()}
      />,
    );

    // Entramos en modo edición
    fireEvent.click(screen.getByText("✏️"));

    // Comprobamos que aparece el input de edición
    expect(screen.getByDisplayValue("Tarea original")).toBeInTheDocument();

    // Cancelamos
    fireEvent.click(screen.getByText("Cancelar"));

    // El input de edición desaparece
    expect(
      screen.queryByDisplayValue("Tarea original"),
    ).not.toBeInTheDocument();

    // Vuelve la vista normal
    expect(screen.getByText("Tarea original")).toBeInTheDocument();
  });
});
