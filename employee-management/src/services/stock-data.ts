import { IEmployeeLogin } from "src/interfaces/IEmployeeLogin";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class StockData {

    oldValue = {};

    getData(): Observable<any> {
        var myObservale = Observable.create((observer) => {
            setInterval(() => {
                var response = {
                    data: {
                        pricechange: Math.floor(Math.random() * 10),
                        pricepercentchange: Math.floor(Math.random() * 10),
                        currentPrice: Math.floor(Math.random() * 10),
                        stockName: Math.floor(Math.random() * 10),
                    }
                }

                if(!this.equalityObject(response.data, this.oldValue)) {
                    observer.next(response)
                    this.oldValue = response.data
                } else {
                    alert("Same Value")
                }
                
            }, 2000)
        })

        return myObservale;
    }

    equalityObject(a, b) {
        if(a.pricechange == b.pricechange) {
            return true;
        }
    
        return false;
    }
}