import { ValueObject } from "../value-object";

export class LastName extends ValueObject {
  public readonly value: string;

  private constructor(value: string) {
    super();
    this.value = value;
  }

  protected getEqualityComponents(): Array<any> {
    return [this.value];
  }

  public static create(value: string): LastName {
    return new LastName(value);
  }
}
