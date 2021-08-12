import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeeDetailsServices } from 'src/services/employee-details.services';


@Component({
  selector: 'emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent{
  empList = [];
  filterEmpList = [];
  userName = "TechnoFunnel";

  styleProperty = {
    color: "red",
    backgroudColor: "green"
  }


  deleteEmployeeFromList(empId) {
    debugger;
    this.empList = this.empList.filter((employee) => {
      return employee.id != empId;
    })

    this.filterEmpList = this.empList;
  }

  constructor(private _httpClient: HttpClient, private empDetailsService: EmployeeDetailsServices) { 
    
    this._httpClient.get("https://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees")
    .subscribe((data: any) => {
      this.empList = data;
      this.filterEmpList = data;
    })


    this.empDetailsService.filterChangeEmitter.subscribe((data) => {
      this.filterEmpList = this.empList.filter((emp) => {
        return emp.name.indexOf(data) > -1;
      })
    })
  }

  

}
