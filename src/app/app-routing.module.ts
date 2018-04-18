import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginSellerComponent} from './login-seller/login-seller.component';

const routes: Routes = [
  {path: 'login', component: LoginSellerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
