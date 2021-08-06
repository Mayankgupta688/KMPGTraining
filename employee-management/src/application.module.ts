import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import  { EmployeeList } from "./components/employeeList/employeeList.component";

import { EmployeeDetails } from "./components/employeeDetails/employeeDetails.component";
import { EmployeeListing } from "./components/employeeListing/employeeListing.component";
import { FormsModule } from "@angular/forms";
import { EmployeeLoginDetailsComponent } from './components/employee-login-details/employee-login-details.component';
import { EmployeeSearchDetailsComponent } from './components/employee-search-details/employee-search-details.component';
import { StockInformationComponent } from './app/stock-information/stock-information.component';
import { StockDetailComponent } from './app/stock-detail/stock-detail.component';


@NgModule({
    declarations: [ EmployeeDetails, EmployeeList, EmployeeListing, EmployeeLoginDetailsComponent, EmployeeSearchDetailsComponent, StockInformationComponent, StockDetailComponent ],
    imports: [ BrowserModule, FormsModule ],
    bootstrap: [ StockInformationComponent ]
})
export class ApplicationModule {}




