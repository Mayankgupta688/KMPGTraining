import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HttpClientModule } from "@angular/common/http";
import  { EmployeeList } from "./components/employeeList/employeeList.component";

import { EmployeeDetails } from "./components/employeeDetails/employeeDetails.component";
import { EmployeeListing } from "./components/employeeListing/employeeListing.component";
import { FormsModule } from "@angular/forms";
import { EmployeeLoginDetailsComponent } from './components/employee-login-details/employee-login-details.component';
import { EmployeeSearchDetailsComponent } from './components/employee-search-details/employee-search-details.component';
import { StockInformationComponent } from './app/stock-information/stock-information.component';
import { StockDetailComponent } from './app/stock-detail/stock-detail.component';
import { ListingComponent } from './app/listing/listing.component';
import { ApplyColorDirective } from "./directives/apply-color.directive";
import { DelayUpdateDirective } from "./directives/delayUpdate.directive";


@NgModule({
    declarations: [ 
        EmployeeDetails, 
        EmployeeList, 
        EmployeeListing, 
        EmployeeLoginDetailsComponent, 
        EmployeeSearchDetailsComponent, 
        StockInformationComponent, 
        StockDetailComponent, 
        ListingComponent,
        ApplyColorDirective,
        DelayUpdateDirective
    ],
    imports: [ BrowserModule, FormsModule, HttpClientModule ],
    bootstrap: [ ListingComponent ]
})
export class ApplicationModule {}




