import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Seller} from '../model/seller';

@Injectable()
export class RegisterSellerService {

  constructor(private http: HttpClient) { }

  register(seller: Seller): Observable<Seller> {
    return this.http.post<Seller>('http://localhost:8085/v1/account/seller', seller);
  }

}
