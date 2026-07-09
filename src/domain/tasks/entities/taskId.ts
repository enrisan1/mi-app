export class TaskId {
  private constructor(private readonly value: string) {}

  static create(value?: string) {
    return new TaskId(value ?? crypto.randomUUID());
  }

  toString() {
    return this.value;
  }

  equals(other: TaskId) {
    return this.value === other.value;
  }
}
