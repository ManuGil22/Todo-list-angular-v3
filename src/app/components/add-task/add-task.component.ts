import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Output() newTask = new EventEmitter<string>();
  newTaskDescription = '';

  constructor() { }

  ngOnInit(): void {
  }

  clickedHandler(){
    if (this.newTaskDescription != ''){
      this.newTask.emit(this.newTaskDescription);
      this.newTaskDescription = '';
    }
  }

  newTaskHandler(newTask: any){
    this.newTaskDescription = newTask;
  }

}
