import {Email} from "../../common/domain/value-objects/email";
import {Password} from "../../common/domain/value-objects/password";
import {ValueObject} from "../../common/domain/value-object";

export class SignIn extends ValueObject {
  public email: Email;
  public password: Password;

  constructor(email: Email, password: Password) {
    super();
    this.email = email;
    this.password = password
  }

  protected getEqualityComponents(): Array<any> {
    return [this.email, this.password];
  }
}
