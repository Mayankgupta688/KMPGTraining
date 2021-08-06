import { Component } from '@angular/core';
import { StockData } from 'src/services/stock-data';

@Component({
  selector: 'stock-information',
  templateUrl: './stock-information.component.html',
  styleUrls: ['./stock-information.component.css']
})
export class StockInformationComponent{

  currentPrice: string;
  stockName: string;

  constructor( private _stockData: StockData) { 
    var dataObservable = this._stockData.getData();
    
    dataObservable.subscribe((res) => {
      this.currentPrice = res.data.currentPrice;
      this.stockName = res.data.stockName;
    }, (err) => {
      console.log(err)
    }, () => {
      console.log("Complete");
    })
  }
}
