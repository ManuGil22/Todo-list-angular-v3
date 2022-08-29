import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})

export class TaskListComponent implements OnInit {
  @Input() taskList: Task[] = [];
  @Output() deleteTask = new EventEmitter<number>();

  constructor() {  }

  ngOnInit(): void {
  }

  sendTaskId(event: any){
    this.deleteTask.emit(event);
  }
}
