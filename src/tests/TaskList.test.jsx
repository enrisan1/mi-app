import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import TaskList from "../components/TaskList";
import { TasksProvider } from "../context/TasksContext";
import TaskForm from "../components/TaskForm";
import { tasksStore } from "../domain/tasks/tasksStore";

function renderWithProvider() {
  return render(
    <TasksProvider>
      <TaskForm />
      <TaskList />
    </TasksProvider>,
  );
}

describe("TaskList (integration)", () => {
  beforeEach(() => {
    tasksStore.clear();
    localStorage.clear();
  });

  it("muestra tareas reales añadidas al estado", () => {
    renderWithProvider();

    // inicialmente no hay tareas
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });

  it("permite añadir y mostrar tareas reales", () => {
    renderWithProvider();

    // buscamos input y botón (ajusta si tus labels difieren)
    const input = screen.getByPlaceholderText(/escribe una tarea/i);
    const button = screen.getByText(/añadir/i);

    fireEvent.change(input, {
      target: { value: "Aprender integración" },
    });

    fireEvent.click(button);

    expect(screen.getByText("Aprender integración")).toBeInTheDocument();
  });

  it("renderiza múltiples tareas correctamente", () => {
    renderWithProvider();

    const input = screen.getByPlaceholderText(/tarea/i);
    const button = screen.getByText(/añadir/i);

    fireEvent.change(input, { target: { value: "Tarea 1" } });
    fireEvent.click(button);

    fireEvent.change(input, { target: { value: "Tarea 2" } });
    fireEvent.click(button);

    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });
});
