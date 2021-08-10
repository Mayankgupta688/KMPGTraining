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
import { StringModifierPipe } from "./pipes/string-modifier.pipes";
import { TransformationComponent } from './app/transformation/transformation.component';
import { FilterDataComponent } from './app/filter-data/filter-data.component';
import { ListFilteringPipe } from "./pipes/list-filtering.pipes";
import { ModelBindingComponent } from './app/model-binding/model-binding.component';
import { EventEmitterComponent } from './app/event-emitter/event-emitter.component';
import { EventEmitterReplierComponent } from './app/event-emitter-replier/event-emitter-replier.component';


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
        DelayUpdateDirective,
        StringModifierPipe,
        TransformationComponent,
        FilterDataComponent,
        ListFilteringPipe,
        ModelBindingComponent,
        EventEmitterComponent,
        EventEmitterReplierComponent
    ],
    imports: [ BrowserModule, FormsModule, HttpClientModule ],
    bootstrap: [ EventEmitterComponent, EventEmitterReplierComponent ]
})
export class ApplicationModule {}




