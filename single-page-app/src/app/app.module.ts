import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { SinglePageComponent } from "./single-page/single-page.component";
import { RouterModule } from "@angular/router";
import { HomePageComponent } from './home-page/home-page.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { AboutPageComponent } from './about-page/about-page.component'

@NgModule({
    declarations: [ SinglePageComponent, HomePageComponent, HelpPageComponent, AboutPageComponent ],
    imports: [
        BrowserModule, 
        HttpClientModule,
        RouterModule.forRoot([
            { path: "", component: HomePageComponent},
            { path: "help", component: HelpPageComponent},
            { path: "about", component: AboutPageComponent},
            { path: "**", component: HomePageComponent},
        ])
    ],
    bootstrap: [ SinglePageComponent ]
})
export class AppModule { }