export class Token {
  private _token: string;
  private _exp: Date;

  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }

  get exp(): Date {
    return this._exp;
  }

  set exp(value: Date) {
    this._exp = value;
  }
}
