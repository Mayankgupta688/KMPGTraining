import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';

interface IEmployee {
  name: string;
  avatar: string;
  createdAt: string;
  id: string;
}

@Component({
  selector: 'listing-employees',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {

  userName: any = "";
  userId: number = 1;
  userAvatar: string = "";
  userCreatedAt: string = "";

  initialColor = 'aqua';

  employeeList: IEmployee[] = [];

  constructor(private _httpClient: HttpClient) { 
    this._httpClient.get("http://localhost:8080/employeeList").subscribe((data: IEmployee[]) => {
      var employee = data
      this.employeeList = data;
    })
  }

  deleteEmployee(id: string) {
    alert("Do you want to delete employee with id : "  + id)
    this._httpClient.delete("http://localhost:8080/employeeList/" + id).subscribe((data) => {
      debugger;
    })
  }

  addEmployee() {
    this._httpClient.post("http://localhost:8080/employeeList", {
      name: this.userName,
      id: this.userId,
      createdAt: this.userCreatedAt,
      avatar: this.userAvatar
    }).subscribe((data) => {
      this.userName = "";
      this.userId = 1;
      this.userAvatar = "";
      this.userCreatedAt = "";
      alert("List has been Updated...")
    }, (err) => {
      debugger;
      if(err.error.indexOf("Insert failed, duplicate id") > -1) {
        alert("Error Inserting Duplicate Id")
      }
    })
  }

}
