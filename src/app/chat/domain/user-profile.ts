import { User } from "./user";
import { Email } from "../../common/domain/value-objects/email";
import { FirstName } from "../../common/domain/value-objects/first-name";
import { LastName } from "../../common/domain/value-objects/last-name";

export class UserProfile extends User {
  public constructor(id: number, email: Email, firstName: FirstName, lastName: LastName, createdAt: Date, updatedAt: Date) {
    super(id, email, firstName, lastName, createdAt, updatedAt);
  }

  public override set email(value: Email) {
    this._email = value;
    this._updatedAt = new Date();
  }

  public override set firstName(value: FirstName) {
    this._firstName = value;
    this._updatedAt = new Date();
  }

  public override set lastName(value: LastName) {
    this._lastName = value;
    this._updatedAt = new Date();
  }

  public static createFromUser(user: User): UserProfile {
    return new UserProfile(user.id, user.email, user.firstName, user.lastName, user.createdAt, user.updatedAt);
  }
}
