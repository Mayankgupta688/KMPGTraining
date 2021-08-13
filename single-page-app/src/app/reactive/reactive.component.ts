import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.less']
})
export class ReactiveComponent {

  constructor(private _httpClient: HttpClient, private _dataService: DataService, private _router: Router) {

  }
  employeeDetailsForm = new FormGroup({
    userName: new FormControl("Anshul Gupta", [Validators.required]),
    userId: new FormControl("40000", [Validators.required, Validators.min(200)]),
    userCreatedAt: new FormControl("", [Validators.required, Validators.minLength(6)]),
    userAvatar: new FormControl("https://images.unsplash.com/photo-1551434678-e076c223a692?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGVtcGxveWVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",[Validators.required, Validators.minLength(10)])
  });

  ngOnInit() {
    this.employeeDetailsForm.get("userName").valueChanges.subscribe((value) => {
      alert("Name is getting Updated to " + value);
    })

    this.employeeDetailsForm.valueChanges.subscribe((data) => {
      alert("Form Value Updated...");
      debugger
    })
  }

  submitData() {
    debugger;
    this._httpClient.post("http://localhost:3000/employeeList", {
      name: this.employeeDetailsForm.get("userName").value,
      id: this.employeeDetailsForm.get("userId").value,
      createdAt: this.employeeDetailsForm.get("userCreatedAt").value,
      avatar: this.employeeDetailsForm.get("userAvatar").value,
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
