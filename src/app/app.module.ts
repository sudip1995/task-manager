import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TaskManagerModule} from '../modules/task-manager/task-manager.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TaskManagerModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
