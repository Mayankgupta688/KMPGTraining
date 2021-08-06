import { Component } from '@angular/core';
import { IEmployeeLogin } from 'src/interfaces/IEmployeeLogin';
import { EmployeeDetailsServices } from 'src/services/employee-details.services';

@Component({
  selector: 'employee-search-details',
  templateUrl: './employee-search-details.component.html',
  styleUrls: ['./employee-search-details.component.css']
})
export class EmployeeSearchDetailsComponent {
  employeeLoginInfo: IEmployeeLogin = null;
  constructor(private _sampleDataService: EmployeeDetailsServices ) { 
    this.employeeLoginInfo = this._sampleDataService.employeeLoginInfo;
  }
}
