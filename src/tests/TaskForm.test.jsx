import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import TaskForm from "../components/TaskForm";

describe("TaskForm", () => {
  it("añade una tarea", () => {
    const addTask = vi.fn();

    render(<TaskForm addTask={addTask} />);

    const input = screen.getByPlaceholderText("Escribe una tarea");
    const button = screen.getByText("Añadir");

    fireEvent.change(input, {
      target: {
        value: "Comprar leche",
      },
    });

    fireEvent.click(button);

    expect(addTask).toHaveBeenCalledWith("Comprar leche");
  });

  it("limpia el input después de añadir una tarea", () => {
    const addTask = vi.fn();

    render(<TaskForm addTask={addTask} />);

    const input = screen.getByPlaceholderText("Escribe una tarea");
    const button = screen.getByText("Añadir");

    fireEvent.change(input, {
      target: {
        value: "Leer documentación",
      },
    });

    fireEvent.click(button);

    expect(input).toHaveValue("");
  });

  it("devuelve el foco al input después de añadir una tarea", () => {
    const addTask = vi.fn();

    render(<TaskForm addTask={addTask} />);

    const input = screen.getByPlaceholderText("Escribe una tarea");
    const button = screen.getByText("Añadir");

    fireEvent.change(input, {
      target: {
        value: "Aprender testing",
      },
    });

    fireEvent.click(button);

    expect(input).toHaveFocus();
  });

  it("no añade una tarea vacía", () => {
    const addTask = vi.fn();

    render(<TaskForm addTask={addTask} />);

    const button = screen.getByRole("button", {
      name: /añadir/i,
    });

    fireEvent.click(button);

    expect(addTask).not.toHaveBeenCalled();
  });
});
