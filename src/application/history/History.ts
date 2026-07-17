export class History<T> {
  private readonly undoStack: T[] = [];
  private readonly redoStack: T[] = [];

  constructor(private readonly limit = Infinity) {}

  push(state: T): void {
    this.pushUndo(state);
    this.redoStack.length = 0;
  }

  undo(current: T): T | undefined {
    const previous = this.undoStack.pop();

    if (previous === undefined) {
      return undefined;
    }

    this.redoStack.push(current);

    return previous;
  }

  redo(current: T): T | undefined {
    const next = this.redoStack.pop();

    if (next === undefined) {
      return undefined;
    }

    this.pushUndo(current);

    return next;
  }

  canUndo(): boolean {
    return this.undoStack.length > 0;
  }

  canRedo(): boolean {
    return this.redoStack.length > 0;
  }

  clear(): void {
    this.undoStack.length = 0;
    this.redoStack.length = 0;
  }

  private pushUndo(state: T): void {
    this.undoStack.push(state);

    if (this.undoStack.length > this.limit) {
      this.undoStack.shift();
    }
  }
}
