import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser"

import { EmployeeDetails } from "./components/employeeDetails/employeeDetails.component";

@Component({
    selector: "application-other-component",
    template: "<h2>Hi Everyone</h2>"
})
export class EmployeeDetailsOther {}


@NgModule({
    declarations: [ EmployeeDetails, EmployeeDetailsOther ],
    imports: [ BrowserModule ],
    bootstrap: [ EmployeeDetails ]
})
export class ApplicationModule {}




