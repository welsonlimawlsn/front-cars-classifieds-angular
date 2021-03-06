import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Token} from '../model/token';
import {UserLogin} from '../model/userLogin';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginSellerService {

  token: Token;

  constructor(private http: HttpClient) { }

  login(user: UserLogin): Observable<Token> {
    return this.http.post<Token>('http://localhost:8085/login', user);
  }

  configureToken(token: Token) {
    this.token = token;
    localStorage.setItem('token', token.token);
    localStorage.setItem('exp', token.exp.toString());
  }

}
