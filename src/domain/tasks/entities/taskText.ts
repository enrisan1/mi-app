export class TaskText {
  private constructor(private readonly value: string) {}

  static create(text: string): TaskText {
    const normalized = text.trim();

    if (normalized.length === 0) {
      throw new Error("Task text cannot be empty");
    }

    if (normalized.length > 200) {
      throw new Error("Task text is too long");
    }

    return new TaskText(normalized);
  }

  getValue(): string {
    return this.value;
  }

  toString(): string {
    return this.value;
  }

  equals(other: TaskText): boolean {
    return this.value === other.value;
  }
}
