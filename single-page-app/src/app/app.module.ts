import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { SinglePageComponent } from "./single-page/single-page.component";
import { RouterModule } from "@angular/router";
import { HomePageComponent } from './home-page/home-page.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from "./details/details.component";
import { ReactiveComponent } from './reactive/reactive.component';
import { DataService } from "src/services/data.service";
import { AuthService } from "src/services/auth.service";
import { SubjectInfoComponent } from './subject-info/subject-info.component';
import { TestingComponent } from './testing/testing.component';


@NgModule({
    declarations: [ SinglePageComponent, HomePageComponent, HelpPageComponent, AboutPageComponent, AddEmployeeComponent, ReactiveComponent, SubjectInfoComponent, TestingComponent ],
    imports: [
        BrowserModule, 
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
       
    ],
    bootstrap: [ ReactiveComponent ]
})
export class AppModule { }