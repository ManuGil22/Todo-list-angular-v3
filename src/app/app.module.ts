import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { HeaderComponent } from './components/header/header.component';
import { BtnComponent } from './components/btn/btn.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskComponent } from './components/task/task.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { TaskRowComponent } from './components/task-row/task-row.component';
import { AddTaskComponent } from './components/add-task/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent,
    HeaderComponent,
    BtnComponent,
    TaskListComponent,
    TaskComponent,
    CheckboxComponent,
    TaskRowComponent,
    AddTaskComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
