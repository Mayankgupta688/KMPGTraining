import { IEmployeeLogin } from "src/interfaces/IEmployeeLogin";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class EmployeeDetailsServices {
    public employeeLoginInfo: IEmployeeLogin = {
        name: "Mayank",
        age: 30,
        designation: "Developer"  
    }
}