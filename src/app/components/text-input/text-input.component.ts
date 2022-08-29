import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
  @Output() newTask = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  handleNewTaskEvent(event:any){
      this.newTask.emit(event.target.value);
      event.target.value = "";
  }

}
