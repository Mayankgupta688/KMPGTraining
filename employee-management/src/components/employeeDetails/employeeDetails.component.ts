import { Component } from "@angular/core";
import { IEmployee } from "../../interfaces/IEmployee";

@Component({
    selector: "application-component",
    templateUrl: "employeeDetails.component.html",
    styleUrls: [
        "employeeDetails.component.css",
        "employeeDetailsOther.component.css"
    ]
})
export class EmployeeDetails {

    user: IEmployee = {
        userName: "Anshul Gupta",
        userAge: 10,
        userDesignation: "Developer"
    }

    getUserDetails() {
        return this.user;
    }

    updateUserName() {
        this.user.userName = "Anshul"
    }
}