import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginSellerComponent} from './login-seller/login-seller.component';
import {RegisterSellerComponent} from './register-seller/register-seller.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: 'login', component: LoginSellerComponent},
  {path: 'register', component: RegisterSellerComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
