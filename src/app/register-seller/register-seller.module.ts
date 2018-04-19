import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterSellerComponent} from './register-seller.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {RegisterSellerService} from '../services/register-seller.service';
import {FormUtilsService} from '../utils/form-utils.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    RegisterSellerComponent
  ],
  providers: [
    RegisterSellerService,
    FormUtilsService
  ]
})
export class RegisterSellerModule { }
