import { IEmployeeLogin } from "src/interfaces/IEmployeeLogin";
import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class EmployeeDetailsServices {
    filterChangeEmitter = new EventEmitter()
    public employeeLoginInfo: IEmployeeLogin = {
        name: "Mayank",
        age: 30,
        designation: "Developer"  
    }
}