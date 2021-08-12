
import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {
  employeeList: any = [];
  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this._dataService.getEmployeeData().subscribe((data) => {
      this.employeeList = data;
      this._dataService.employeeListMaster = data;
    })
  }

}
