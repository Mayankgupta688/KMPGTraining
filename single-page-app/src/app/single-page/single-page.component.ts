import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.less']
})
export class SinglePageComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  redirectToAddEmployee() {
    this._router.navigate(['addemployee'])
  }

}
