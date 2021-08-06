import { Component } from '@angular/core';
import { EmployeeDetailsServices } from 'src/services/employee-details.services';
import { IEmployeeLogin } from "../../interfaces/IEmployeeLogin";

@Component({
  selector: 'components-employee-login-details',
  templateUrl: './employee-login-details.component.html',
  styleUrls: ['./employee-login-details.component.css']
})
export class EmployeeLoginDetailsComponent {
  employeeLoginInfo: IEmployeeLogin = null;
  currentStockPrice = 0;
  constructor(private _sampleDataService: EmployeeDetailsServices ) { 
    this.employeeLoginInfo = this._sampleDataService.employeeLoginInfo;

    setInterval(() => {
      var dataPromise = fetch("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI");
        
      dataPromise.then((response) => response.json())
        .then((res) => {
          this.currentStockPrice = res.data.pricecurrent;
        }).catch((response) => {
          alert(response.message)
        })
    }, 10000)
  }
}
