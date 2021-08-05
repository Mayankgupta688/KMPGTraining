import { Component } from "@angular/core";
import * as data from "../../data/employees.json";

@Component({
    selector: "employee-list",
    templateUrl: "employeeList.component.html",
    styleUrls: ["employeeList.component.css"]
})
export class EmployeeList {
    employeeList = [{
        "id":2,
        "createdAt":"2018-12-03T11:37:42.015Z",
        "name":"Mayank",
        "avatar":"https://www.bizlibrary.com/wp-content/uploads/2019/05/30141657/employeeretention.png",
        "salary": 1000
    },
    {
        "id":22,
        "createdAt":"2018-12-02T21:06:49.825Z",
        "name":"Roxanne Kunde",
        "avatar":"https://www.bizlibrary.com/wp-content/uploads/2019/05/30141657/employeeretention.png",
        "salary": 1000
    },
    {
        "id":32,
        "createdAt":"2018-12-03T03:37:39.995Z",
        "name":"Dante Spencer",
        "avatar":"https://www.bizlibrary.com/wp-content/uploads/2019/05/30141657/employeeretention.png",
        "salary": 1000
    },
    {
        "id":42,
        "createdAt":"2018-12-03T11:07:34.261Z",
        "name":"Benny Hartmann",
        "avatar":"https://www.bizlibrary.com/wp-content/uploads/2019/05/30141657/employeeretention.png",
        "salary": 1300
    },
    {
        "id":52,
        "createdAt":"2018-12-03T11:38:36.583Z",
        "name":"Easton Fisher",
        "avatar":"https://www.bizlibrary.com/wp-content/uploads/2019/05/30141657/employeeretention.png",
        "salary": 1500
    }];
}