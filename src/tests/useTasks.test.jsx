import { renderHook, act } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";

import { useTasks } from "../ui/hooks/useTasks";
import { tasksStore } from "../application/tasks/tasksStore";

beforeEach(() => {
  act(() => {
    tasksStore.replaceState([]);
  });
});

const renderUseTasks = () => renderHook(() => useTasks("all"));

describe("useTasks (senior architecture)", () => {
  test("añade y lista tareas", () => {
    const { result } = renderUseTasks();

    act(() => {
      result.current.addTask("A");
      result.current.addTask("B");
    });

    expect(result.current.tasks).toHaveLength(2);

    expect(result.current.tasks[0].text.toString()).toBe("A");
    expect(result.current.tasks[1].text.toString()).toBe("B");
  });

  test("toggle funciona correctamente", () => {
    const { result } = renderUseTasks();

    act(() => {
      result.current.addTask("A");
    });

    const taskId = result.current.tasks[0].id.toString();

    act(() => {
      result.current.toggleTask(taskId);
    });

    expect(result.current.tasks[0].completed).toBe(true);
  });

  test("editTask modifica el texto", () => {
    const { result } = renderUseTasks();

    act(() => {
      result.current.addTask("A");
    });

    const taskId = result.current.tasks[0].id.toString();

    act(() => {
      result.current.editTask(taskId, "A editada");
    });

    expect(result.current.tasks[0].text.toString()).toBe("A editada");
  });

  test("deleteTask elimina una tarea", () => {
    const { result } = renderUseTasks();
    act(() => {
      result.current.addTask("A");
      result.current.addTask("B");
    });

    const taskId = result.current.tasks[0].id.toString();

    act(() => {
      result.current.deleteTask(taskId);
    });

    expect(result.current.tasks).toHaveLength(1);
    expect(result.current.tasks[0].text.toString()).toBe("B");
  });

  test("clearCompleted elimina únicamente las tareas completadas", () => {
    const { result } = renderUseTasks();

    act(() => {
      result.current.addTask("A");
      result.current.addTask("B");
    });

    const taskId = result.current.tasks[0].id.toString();

    act(() => {
      result.current.toggleTask(taskId);
    });

    act(() => {
      result.current.clearCompleted();
    });

    expect(result.current.tasks).toHaveLength(1);
    expect(result.current.tasks[0].text.toString()).toBe("B");
    expect(result.current.tasks[0].completed).toBe(false);
  });

  test("markAllCompleted marca todas las tareas como completadas", () => {
    const { result } = renderUseTasks();

    act(() => {
      result.current.addTask("A");
      result.current.addTask("B");
    });

    act(() => {
      result.current.markAllCompleted();
    });

    expect(result.current.tasks).toHaveLength(2);
    expect(result.current.tasks.every((task) => task.completed)).toBe(true);
  });

  test("markAllPending marca todas las tareas como pendientes", () => {
    const { result } = renderUseTasks();

    act(() => {
      result.current.addTask("A");
      result.current.addTask("B");
    });

    act(() => {
      result.current.markAllCompleted();
    });

    act(() => {
      result.current.markAllPending();
    });

    expect(result.current.tasks).toHaveLength(2);
    expect(result.current.tasks.every((task) => !task.completed)).toBe(true);
  });
});
