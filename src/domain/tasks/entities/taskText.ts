export class TaskText {
  private constructor(private readonly value: string) {}

  static create(text: string): TaskText {
    const trimmed = text.trim();

    if (!trimmed) {
      throw new Error("Task text cannot be empty");
    }

    return new TaskText(trimmed);
  }

  getValue(): string {
    return this.value;
  }
}
