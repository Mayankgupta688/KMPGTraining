import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {
  @Input() employeedetails;
  @Input() userNameData;
  @Input() styleProperty;

  @Output() raiseDeletionEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  deleteData(empId) {
    debugger;
    this.raiseDeletionEvent.emit(empId)
  }

}
