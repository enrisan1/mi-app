export type ContinuationResult = {
  previous: string;
  continuation: string;
};

function hasObservableContent(value: string): boolean {
  return value.trim().length > 0;
}

export function isContinuationAvailable(previous: string | null): boolean {
  return previous !== null && hasObservableContent(previous);
}

export function continueFromPrevious(
  previous: string | null,
  continuation: string,
): ContinuationResult {
  if (previous === null || !hasObservableContent(previous)) {
    throw new Error("A valid previous contribution is required");
  }

  if (!hasObservableContent(continuation)) {
    throw new Error("A valid continuation is required");
  }

  return {
    previous,
    continuation,
  };
}
