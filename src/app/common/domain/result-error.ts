import {ValueObject} from "./value-object";

export class ResultError extends ValueObject{
  public readonly code: string;
  public readonly message: string;

  constructor(code: string, message: string) {
    super();

    this.code = code;
    this.message = message;
  }

  protected getEqualityComponents(): Array<any> {
    return [this.code];
  }

  public static None = new ResultError("", "");
}
