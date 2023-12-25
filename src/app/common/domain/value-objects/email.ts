import { ValueObject } from "../value-object";

export class Email extends ValueObject {
  public static readonly maxLength = 320;

  public readonly value: string;

  private constructor(value: string) {
    super();
    this.value = value;
  }

  protected getEqualityComponents(): Array<any> {
    return [this.value];
  }

  public static create(value: string): Email {
    if (value.length < Email.maxLength) {

    }

    return new Email(value);
  }
}
