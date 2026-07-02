import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import TaskForm from "../ui/components/TaskForm";

const mockAddTask = vi.fn();

vi.mock("../ui/hooks/useTasks", () => ({
  useTasks: () => ({
    addTask: mockAddTask,
    deleteTask: vi.fn(),
    toggleTask: vi.fn(),
    editTask: vi.fn(),
    clearCompleted: vi.fn(),
    filter: "all",
    setFilter: vi.fn(),
  }),
}));

beforeEach(() => {
  mockAddTask.mockClear();
});

describe("TaskForm", () => {
  it("añade una tarea", () => {
    render(<TaskForm />);

    const input = screen.getByPlaceholderText("Escribe una tarea");
    const button = screen.getByText("Añadir");

    fireEvent.change(input, {
      target: { value: "Comprar leche" },
    });

    fireEvent.click(button);

    expect(mockAddTask).toHaveBeenCalledWith("Comprar leche");
  });

  it("limpia el input después de añadir una tarea", () => {
    render(<TaskForm />);

    const input = screen.getByPlaceholderText("Escribe una tarea");
    const button = screen.getByText("Añadir");

    fireEvent.change(input, {
      target: { value: "Leer documentación" },
    });

    fireEvent.click(button);

    expect(input).toHaveValue("");
  });

  it("devuelve el foco al input después de añadir una tarea", () => {
    render(<TaskForm />);

    const input = screen.getByPlaceholderText("Escribe una tarea");
    const button = screen.getByText("Añadir");

    fireEvent.change(input, {
      target: { value: "Aprender testing" },
    });

    fireEvent.click(button);

    expect(input).toHaveFocus();
  });

  it("no añade una tarea vacía", () => {
    render(<TaskForm />);

    const button = screen.getByRole("button", { name: /añadir/i });

    fireEvent.click(button);

    expect(mockAddTask).not.toHaveBeenCalled();
  });
});
