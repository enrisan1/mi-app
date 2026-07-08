type Selector<State, Result> = (state: State) => Result;

export function createSelector<State, Input, Result>(
  selector: Selector<State, Input>,
  resultFunc: (input: Input) => Result,
): Selector<State, Result> {
  let lastInput: Input | undefined;
  let lastResult: Result;

  return (state: State) => {
    const input = selector(state);

    if (input === lastInput) {
      return lastResult;
    }

    lastInput = input;
    lastResult = resultFunc(input);

    return lastResult;
  };
}
