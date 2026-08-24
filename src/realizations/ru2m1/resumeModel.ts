export type SituatedResult = {
  previous: string;
  current: string;
};

function hasObservableContent(value: string): boolean {
  return value.trim().length > 0;
}

export function isResumeAvailable(previous: string | null): boolean {
  return previous !== null && hasObservableContent(previous);
}

export function createFromPrevious(
  previous: string | null,
  current: string,
): SituatedResult {
  if (previous === null || !hasObservableContent(previous)) {
    throw new Error("A valid previous state is required");
  }

  if (!hasObservableContent(current)) {
    throw new Error("A valid current value is required");
  }

  return {
    previous,
    current,
  };
}
