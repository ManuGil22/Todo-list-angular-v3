import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Output() newTask = new EventEmitter<string>();
  newTaskDescription = '';

  scrolled: boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
      this.scrolled = window.scrollY > 170;
  }

  constructor() {  }

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
