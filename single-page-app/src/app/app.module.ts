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


@NgModule({
    declarations: [ SinglePageComponent, HomePageComponent, HelpPageComponent, AboutPageComponent, AddEmployeeComponent, ReactiveComponent, SubjectInfoComponent ],
    imports: [
        BrowserModule, 
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            {   
                path: "", 
                component: HomePageComponent,
                resolve: {
                    employees: DataService,

                }
            },
            { 
                path: "help", 
                component: HelpPageComponent, 
                canActivate: [DataService]
            },
            { path: "about", component: AboutPageComponent},
            { path: "addemployee", component: AddEmployeeComponent},
            { path: "details/:empid/:empname", component: DetailsComponent},
            { path: "addreactive", component: ReactiveComponent},
            { path: "**", component: ReactiveComponent},
        ])
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS, useClass: AuthService, multi: true
    }],
    bootstrap: [ SubjectInfoComponent ]
})
export class AppModule { }