import {Email} from "../../common/domain/value-objects/email";
import {Password} from "../../common/domain/value-objects/password";
import {FirstName} from "../../common/domain/value-objects/first-name";
import {LastName} from "../../common/domain/value-objects/last-name";
import {ValueObject} from "../../common/domain/value-object";

export class SignUp extends ValueObject {
  public email: Email;
  public firstName: FirstName;
  public lastName: LastName;
  public password: Password;

  constructor(email: Email, firstName: FirstName, lastName: LastName, password: Password) {
    super();
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
  }

  protected getEqualityComponents(): Array<any> {
    return [this.email, this.firstName, this.lastName, this.password];
  }
}
