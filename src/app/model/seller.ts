import {UserLogin} from './userLogin';
import {UserInfo} from './user-info';

export class Seller extends UserLogin {
  private _seller: UserInfo;

  get seller(): UserInfo {
    return this._seller;
  }

  set seller(value: UserInfo) {
    this._seller = value;
  }
}
