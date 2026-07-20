import { describe, expect, it } from "vitest";
import { Task } from "../domain/tasks/entities/task";
import {
  selectAllTasks,
  selectActiveTasks,
  selectCompletedTasks,
  selectVisibleTasks,
  selectTotalTasks,
  selectCompletedCount,
  selectPendingCount,
  selectHasPendingTasks,
  selectHasCompletedTasks,
} from "../domain/tasks/tasksSelectors";

const tasks: Task[] = [
  Task.restore({
    id: "1",
    text: "Comprar pan",
    completed: false,
  }),
  Task.restore({
    id: "2",
    text: "Leer",
    completed: true,
  }),
  Task.restore({
    id: "3",
    text: "Programar",
    completed: false,
  }),
];

const completedTasks: Task[] = [
  Task.restore({
    id: "1",
    text: "Comprar pan",
    completed: true,
  }),
  Task.restore({
    id: "2",
    text: "Leer",
    completed: true,
  }),
];

const pendingTasks: Task[] = [
  Task.restore({
    id: "1",
    text: "Comprar pan",
    completed: false,
  }),
  Task.restore({
    id: "2",
    text: "Leer",
    completed: false,
  }),
];

describe("tasksSelectors", () => {
  describe("Task collections", () => {
    it("selectAllTasks devuelve todas las tareas", () => {
      expect(selectAllTasks(tasks)).toEqual(tasks);
    });

    it("selectActiveTasks devuelve solo las pendientes", () => {
      expect(selectActiveTasks(tasks)).toEqual([tasks[0], tasks[2]]);
    });

    it("selectCompletedTasks devuelve solo las completadas", () => {
      expect(selectCompletedTasks(tasks)).toEqual([tasks[1]]);
    });

    it("selectVisibleTasks('all') devuelve todas", () => {
      expect(selectVisibleTasks(tasks, "all")).toEqual(tasks);
    });

    it("selectVisibleTasks('active') devuelve las pendientes", () => {
      expect(selectVisibleTasks(tasks, "active")).toEqual([tasks[0], tasks[2]]);
    });

    it("selectVisibleTasks('completed') devuelve las completadas", () => {
      expect(selectVisibleTasks(tasks, "completed")).toEqual([tasks[1]]);
    });
  });

  describe("Task counters", () => {
    it("selectTotalTasks devuelve el número total de tareas", () => {
      expect(selectTotalTasks(tasks)).toBe(3);
    });

    it("selectCompletedCount devuelve el número de tareas completadas", () => {
      expect(selectCompletedCount(tasks)).toBe(1);
    });

    it("selectPendingCount devuelve el número de tareas pendientes", () => {
      expect(selectPendingCount(tasks)).toBe(2);
    });
  });

  describe("Task predicates", () => {
    it("selectHasPendingTasks devuelve true cuando hay tareas pendientes", () => {
      expect(selectHasPendingTasks(tasks)).toBe(true);
    });

    it("selectHasPendingTasks devuelve false cuando no hay tareas pendientes", () => {
      expect(selectHasPendingTasks(completedTasks)).toBe(false);
    });

    it("selectHasCompletedTasks devuelve true cuando hay tareas completadas", () => {
      expect(selectHasCompletedTasks(tasks)).toBe(true);
    });

    it("selectHasCompletedTasks devuelve false cuando no hay tareas completadas", () => {
      expect(selectHasCompletedTasks(pendingTasks)).toBe(false);
    });
  });
});
