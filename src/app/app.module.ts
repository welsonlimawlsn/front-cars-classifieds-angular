import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {LoginSellerModule} from './login-seller/login-seller.module';
import {RegisterSellerModule} from './register-seller/register-seller.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginSellerModule,
    RegisterSellerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
