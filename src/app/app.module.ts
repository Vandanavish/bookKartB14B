import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { NavigateComponent } from './navigate/navigate.component';
import { NgMaterialModule } from './ng-material/ng-material.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PaymentComponent,
    NavigateComponent
    
   ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
 
    FormsModule,
    ReactiveFormsModule,
    NgMaterialModule
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
