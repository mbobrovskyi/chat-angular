import {ResultError} from "./result-error";

export class Result<TValue = void> {
  public readonly isSuccess: boolean;
  public readonly error: ResultError;
  public readonly value?: TValue;

  private constructor(isSuccess: boolean, error: ResultError, value?: TValue) {
    this.isSuccess = isSuccess;
    this.error = error;
    this.value = value;
  }

  public isFailure(): boolean {
    return !this.isSuccess;
  }

  public static error<TValue>(error: ResultError): Result<TValue> {
    return new Result<TValue>(false, error);
  }

  public static success<TValue>(value: TValue): Result<TValue> {
    return new Result<TValue>(true, ResultError.None, value)
  }
}
