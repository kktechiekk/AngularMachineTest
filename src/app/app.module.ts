import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpRequestHandlingComponent } from './http-request-handling/http-request-handling.component';
import {HttpClientModule} from '@angular/common/http';
import { ComponentAComponent } from './component-interaction/component-a/component-a.component';
import { ComponentBComponent } from './component-interaction/component-b/component-b.component';
import { CounterFunctionComponent } from './counter-function/counter-function.component';
@NgModule({
  declarations: [
    AppComponent,
    HttpRequestHandlingComponent,
    ComponentAComponent,
    ComponentBComponent,
    CounterFunctionComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
