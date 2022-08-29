import { Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Output() isChecked = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  checkboxHandler(event:any){
    this.isChecked.emit(event.target.checked);
  }

}
