import type { Middleware } from "../types";

export const loggerMiddleware =
  <State, Action>(): Middleware<State, Action> =>
  (store) =>
  (next) =>
  (action) => {
    console.group("🟡 Action");
    console.log("Prev state:", store.getState());
    console.log("Action:", action);

    next(action);

    console.log("Next state:", store.getState());
    console.groupEnd();
  };
