import { Component, OnInit } from '@angular/core';
import * as data from "../../data/employees.json";

@Component({
  selector: 'model-binding',
  templateUrl: './model-binding.component.html',
  styleUrls: ['./model-binding.component.css']
})
export class ModelBindingComponent implements OnInit {

  public filterText = "";

  masterEmployeeList: any;
  
  filteredEmployeeList: any;

  constructor() { 
    var jsonOutput = data;
    this.masterEmployeeList = jsonOutput.employeeList;
    this.filteredEmployeeList = jsonOutput.employeeList;
  }

  inputChange(event) {
    debugger;
    this.filterText = event
    this.filteredEmployeeList = this.masterEmployeeList.filter((emp) => {
      return emp.name.indexOf(this.filterText) > -1;
    })
  }

  ngOnInit(): void {
  }
}
