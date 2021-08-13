
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from "../../services/data.service";
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {
  employeeList: any = [];
  userName: string;
  userPassword: string;
  
  constructor(private _dataService: DataService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    debugger;
    console.dir(this._route);
    this._route.data.subscribe((response) => {
      this.employeeList = response.employees;
    })
  }

  getViewEmployee(empId, empName) {
    this._router.navigate(["details", empId, empName])
  }

  validateUserData() {
    debugger;
    this._dataService.validateUser(this.userName, this.userPassword)
  }

}
