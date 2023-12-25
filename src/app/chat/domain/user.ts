import { Entity } from "../../common/domain/entity";
import { Email } from "../../common/domain/value-objects/email";
import { FirstName } from "../../common/domain/value-objects/first-name";
import { LastName } from "../../common/domain/value-objects/last-name";

export class User extends Entity {
  public readonly createdAt: Date;

  protected _email: Email;
  protected _firstName: FirstName;
  protected _lastName: LastName;
  protected _updatedAt: Date;

  public constructor(id: number, email: Email, firstName: FirstName, lastName: LastName, createdAt: Date, updatedAt: Date) {
    super(id);
    this._email = email;
    this._firstName = firstName;
    this._lastName = lastName;
    this.createdAt = createdAt;
    this._updatedAt = updatedAt;
  }

  get email(): Email {
    return this._email;
  }

  get firstName(): FirstName {
    return this._firstName;
  }

  get lastName(): LastName {
    return this._lastName;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }

  public get fullName(): string {
    return `${this.firstName.value} ${this.lastName.value}`;
  }
}
