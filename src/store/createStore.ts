import type { Dispatch, Listener, Middleware, Reducer, Store } from "./types";

export function createStore<State, Action>(
  reducer: Reducer<State, Action>,
  initialState: State,
  middlewares: Middleware<State, Action>[] = [],
): Store<State, Action> {
  let state = initialState;
  const listeners = new Set<Listener>();

  function getState(): State {
    return state;
  }

  function subscribe(listener: Listener): () => void {
    listeners.add(listener);

    return () => {
      listeners.delete(listener);
    };
  }

  function replaceState(newState: State): void {
    state = newState;

    listeners.forEach((listener) => listener());
  }

  const baseDispatch: Dispatch<Action> = (action) => {
    state = reducer(state, action);

    listeners.forEach((listener) => listener());
  };

  let dispatch: Dispatch<Action> = baseDispatch;

  const store: Store<State, Action> = {
    getState,
    subscribe,
    replaceState,
    dispatch: (action) => dispatch(action),
  };

  dispatch = middlewares.reduceRight(
    (next, middleware) => middleware(store)(next),
    baseDispatch,
  );

  return store;
}
