import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginSellerComponent} from './login-seller.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {LoginSellerService} from '../services/login-seller.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    LoginSellerComponent
  ],
  providers: [
    LoginSellerService
  ]
})
export class LoginSellerModule { }
