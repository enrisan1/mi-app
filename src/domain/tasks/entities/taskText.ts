export class TaskText {
  private constructor(private readonly _value: string) {}

  static create(value: string): TaskText {
    const trimmedValue = value.trim();

    if (!trimmedValue) {
      throw new Error("Task text cannot be empty");
    }

    if (trimmedValue.length > 200) {
      throw new Error("Task text cannot exceed 200 characters");
    }

    return new TaskText(trimmedValue);
  }

  static restore(value: string): TaskText {
    return new TaskText(value);
  }

  value(): string {
    return this._value;
  }

  toString(): string {
    return this._value;
  }

  equals(other: TaskText): boolean {
    return this._value === other._value;
  }
}
