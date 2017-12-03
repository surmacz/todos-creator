import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ListComponent} from './list/list.component';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ListComponent]
})
export class AppModule { }
