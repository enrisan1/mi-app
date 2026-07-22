export type PriorityValue = "low" | "medium" | "high";

export class Priority {
  private constructor(private readonly value: PriorityValue) {}

  static low(): Priority {
    return new Priority("low");
  }

  static medium(): Priority {
    return new Priority("medium");
  }

  static high(): Priority {
    return new Priority("high");
  }

  static restore(value: PriorityValue): Priority {
    return new Priority(value);
  }

  toString(): PriorityValue {
    return this.value;
  }

  equals(other: Priority): boolean {
    return this.value === other.value;
  }
}
