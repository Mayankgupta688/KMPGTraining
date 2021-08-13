import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.less']
})
export class AddEmployeeComponent {

  constructor(private _httpClient: HttpClient, private _router: Router, private _dataService: DataService) { }

  userName: string;
  userId: string;
  userAvatar: string;
  userDate: string;

  addEmployeeToList() {
    this._httpClient.post("http://localhost:3000/employeeList", {
      name: this.userName,
      avatar: this.userAvatar,
      id: this.userId,
      createdAt: this.userDate
    }).subscribe((data) => {
      this._dataService.employeeListMaster.push(data);
      this._router.navigate([""]);
    }, (err) => {
      this._router.navigate([""]);
      alert("Error Adding Data to the Database")
    }, () => {
      alert("Request Executed...")
    })
  }

}
