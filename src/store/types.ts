export type Listener = () => void;

export type Reducer<State, Action> = (state: State, action: Action) => State;

export type Store<State, Action> = {
  getState(): State;
  dispatch(action: Action): void;
  subscribe(listener: Listener): () => void;
  replaceState(state: State): void;
};

export type Dispatch<Action> = (action: Action) => void;

export type Middleware<State, Action> = (
  store: Store<State, Action>,
) => (next: Dispatch<Action>) => (action: Action) => void;