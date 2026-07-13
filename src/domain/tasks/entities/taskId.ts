export class TaskId {
  private constructor(private readonly value: string) {}

  static create(): TaskId {
    return new TaskId(crypto.randomUUID());
  }

  static from(value: string): TaskId {
    return new TaskId(value);
  }

  toString(): string {
    return this.value;
  }
}
