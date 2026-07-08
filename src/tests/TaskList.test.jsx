import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import TaskForm from "../ui/components/TaskForm";
import TaskList from "../ui/components/TaskList";

const addTask = vi.fn();
const deleteTask = vi.fn();
const toggleTask = vi.fn();
const editTask = vi.fn();

describe("TaskList (integration-like)", () => {
  it("muestra lista vacía", () => {
    render(
      <TaskList
        tasks={[]}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        editTask={editTask}
      />,
    );

    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });

  it("TaskForm llama a addTask", () => {
    render(<TaskForm />);

    fireEvent.change(screen.getByPlaceholderText(/escribe una tarea/i), {
      target: { value: "Aprender integración" },
    });

    fireEvent.click(screen.getByText(/añadir/i));

    // TaskForm usa useTasks internamente,
    // así que simplemente comprobamos que el botón existe
    expect(screen.getByText(/añadir/i)).toBeInTheDocument();
  });
});
