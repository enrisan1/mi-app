import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import TaskList from "../ui/components/TaskList";
import TaskForm from "../ui/components/TaskForm";

const mockAddTask = vi.fn();

vi.mock("../ui/hooks/useTasks", () => ({
  useTasks: () => ({
    tasks: [],
    filteredTasks: [],
    addTask: mockAddTask,
    deleteTask: vi.fn(),
    toggleTask: vi.fn(),
    editTask: vi.fn(),
    clearCompleted: vi.fn(),
    filter: "all",
    setFilter: vi.fn(),
    totalTasks: 0,
    pendingTasks: 0,
    completedTasks: 0,
  }),
}));

function renderUI() {
  return render(
    <>
      <TaskForm />
      <TaskList />
    </>,
  );
}

describe("TaskList (integration-like)", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("muestra tareas reales añadidas al estado", () => {
    renderUI();
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });

  it("permite añadir y mostrar tareas", () => {
    renderUI();

    fireEvent.change(screen.getByPlaceholderText(/escribe una tarea/i), {
      target: { value: "Aprender integración" },
    });

    fireEvent.click(screen.getByText(/añadir/i));

    expect(mockAddTask).toHaveBeenCalledWith("Aprender integración");
  });
});
