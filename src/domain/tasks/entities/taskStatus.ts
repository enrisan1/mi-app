export class TaskStatus {
  private constructor(private readonly completed: boolean) {}

  static pending() {
    return new TaskStatus(false);
  }

  static completed() {
    return new TaskStatus(true);
  }

  static from(value: boolean) {
    return new TaskStatus(value);
  }

  toggle() {
    return new TaskStatus(!this.completed);
  }

  getValue() {
    return this.completed;
  }
}
