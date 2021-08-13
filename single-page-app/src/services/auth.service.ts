import { HttpClient, HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CanActivate, Resolve } from "@angular/router";
import { Observable, of, forkJoin, merge } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class AuthService implements HttpInterceptor {

    isUserLoggedIn: boolean = false;
    employeeListMaster: any = [];


    intercept(req: HttpRequest<any>, next: HttpHandler) {
        debugger;
        req.headers.set( "Content-Type", "json")
        req.headers.set( "userName", "Mayank Gupta");
        return next.handle(req);
    }
}