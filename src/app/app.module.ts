import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Sesion03Module } from './sesion03/sesion03.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Sesion03Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
