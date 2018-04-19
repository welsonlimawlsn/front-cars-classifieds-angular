import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginSellerComponent} from './login-seller.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {LoginSellerService} from '../services/login-seller.service';
import {RouterModule} from '@angular/router';
import {FormUtilsService} from '../utils/form-utils.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    LoginSellerComponent
  ],
  providers: [
    LoginSellerService,
    FormUtilsService
  ]
})
export class LoginSellerModule { }
