import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import  { EmployeeList } from "./components/employeeList/employeeList.component";

import { EmployeeDetails } from "./components/employeeDetails/employeeDetails.component";
import { EmployeeListing } from "./components/employeeListing/employeeListing.component";
import { FormsModule } from "@angular/forms";

@Component({
    selector: "application-other-component",
    template: "<h2>Hi Everyone</h2>"
})
export class EmployeeDetailsOther {}


@NgModule({
    declarations: [ EmployeeDetails, EmployeeDetailsOther, EmployeeList, EmployeeListing ],
    imports: [ BrowserModule, FormsModule ],
    bootstrap: [ EmployeeListing ]
})
export class ApplicationModule {}




