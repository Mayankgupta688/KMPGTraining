import { Component, OnInit } from '@angular/core';
import * as data from "../../data/employees.json";
@Component({
  selector: 'filter-data',
  templateUrl: './filter-data.component.html',
  styleUrls: ['./filter-data.component.css']
})
export class FilterDataComponent implements OnInit {

  private _filterText = "";

  get filterText(): string {
    return this._filterText
  }

  set filterText(val: string) {
    this._filterText = val;
    this.jsonDataFiltered = this.jsonData.filter((emp) => {
      return emp.name.indexOf(this.filterText) > -1;
    })
  }

  jsonData: any;
  
  jsonDataFiltered: any;

  constructor() { 
    var jsonOutput = data;
    this.jsonData = jsonOutput.employeeList;
    this.jsonDataFiltered = jsonOutput.employeeList;
  }

  inputChange() {
    alert("Filter Text " + this.filterText);
    this.jsonDataFiltered = this.jsonData.filter((emp) => {
      return emp.name.indexOf(this.filterText) > -1;
    })
  }

  ngOnInit(): void {
  }

}
