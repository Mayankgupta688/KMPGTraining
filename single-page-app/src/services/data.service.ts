import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class DataService {

    constructor(private _httpClient: HttpClient) {
        this.getData();
    }

    employeeListMaster: any = [];
    getEmployeeData(): Observable<any> {
        if(this.employeeListMaster.length) {
            return of(this.employeeListMaster);
        } else {
            return this._httpClient.get("https://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees");
        }
        
    }

    getData() {
        this._httpClient.get("https://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").subscribe((data) => {
            this.employeeListMaster = data
        })
    }
}