export class UserInfo {
  private _name: string;
  private _email: string;
  private _dateOfBirth: Date;
  private _identificationDocument: string;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get dateOfBirth(): Date {
    return this._dateOfBirth;
  }

  set dateOfBirth(value: Date) {
    this._dateOfBirth = value;
  }

  get identificationDocument(): string {
    return this._identificationDocument;
  }

  set identificationDocument(value: string) {
    this._identificationDocument = value;
  }
}
