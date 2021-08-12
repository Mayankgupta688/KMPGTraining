import { Component, OnInit } from '@angular/core';
import { EmployeeDetailsServices } from 'src/services/employee-details.services';

@Component({
  selector: 'emp-filter',
  templateUrl: './emp-filter.component.html',
  styleUrls: ['./emp-filter.component.css']
})
export class EmpFilterComponent {
  filterText: string = "";

  filterUpdated(filterValue) {
    this.empDetailsService.filterChangeEmitter.emit(filterValue);
  }

  constructor(private empDetailsService: EmployeeDetailsServices) { }

}
