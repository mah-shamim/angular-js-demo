import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxLipsumComponent} from "ngx-lipsum";

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent
  ],
  imports: [
    BrowserModule,
    NgxLipsumComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
