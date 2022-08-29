import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-row',
  templateUrl: './task-row.component.html',
  styleUrls: ['./task-row.component.scss']
})
export class TaskRowComponent implements OnInit {
  @Input() taskDescription = '';
  @Input() taskId = '';
  @Output() deleteTask = new EventEmitter<string>();
  taskCompleted = false ;
  
  constructor() { }

  ngOnInit(): void {
  }

  isTaskCompleted(value: boolean){
    this.taskCompleted = value;
  }

  getTaskId(){
    this.deleteTask.emit(this.taskId);
  }
}
