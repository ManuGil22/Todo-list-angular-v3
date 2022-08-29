import { Component } from '@angular/core';
import { Task } from './models/Task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';
  id = 0;
  tasksArray: Task[] = [];

  getNewTask(newTaskDescription:string){
    var newTask = {
      id: this.id,
      task: newTaskDescription
    }
    this.id = this.id + 1;
    this.tasksArray.splice(0, 0, newTask);
  }

  deleteTaskById(event:any){
    let tasksLeft = this.tasksArray.filter((obj) => {return obj.id != event});
    this.tasksArray = [...tasksLeft];
  }
}
