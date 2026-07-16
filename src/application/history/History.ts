export class History<T> {
  private entries: T[] = [];

  push(entry: T): void {
    this.entries.push(entry);
  }

  pop(): T | undefined {
    return this.entries.pop();
  }

  hasEntries(): boolean {
    return this.entries.length > 0;
  }

  clear(): void {
    this.entries = [];
  }
}
