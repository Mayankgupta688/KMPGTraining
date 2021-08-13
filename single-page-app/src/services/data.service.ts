import { HttpClient, HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CanActivate, Resolve } from "@angular/router";
import { Observable, of, forkJoin, merge } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class DataService implements Resolve<any>, CanActivate, HttpInterceptor {

    constructor(private _httpClient: HttpClient) {
        this.getData();
    }
    isUserLoggedIn: boolean = false;
    employeeListMaster: any = [];
    getEmployeeData(): Observable<any> {
        if(this.employeeListMaster.length) {
            return of(this.employeeListMaster);
        } else {
            return this._httpClient.get("http://localhost:3000/employeeList").pipe(
                tap(data => {
                    console.log(data)
                })
            );
        }
    } 

    resolve() {
        return this._httpClient.get("http://localhost:3000/employeeList");
    }

    getData() {
        this._httpClient.get("http://localhost:3000/employeeList").subscribe((data) => {
            this.employeeListMaster = data
        })
    }

    validateUser(userName, userPassword) {
        console.log(userName);
        console.log(userPassword);
        this.isUserLoggedIn = true;
    }

    canActivate(): boolean {
        debugger;
        return this.isUserLoggedIn;
    }


    intercept(req: HttpRequest<any>, next: HttpHandler) {
        debugger;
        req.headers.set( "Content-Type", "json")
        req.headers.set( "userName", "Mayank Gupta");
        return next.handle(req);
    }
}