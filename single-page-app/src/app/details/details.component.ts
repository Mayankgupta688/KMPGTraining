import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
export class DetailsComponent implements OnInit {
  userId: string = "";
  userName: string;
  constructor(private _route: ActivatedRoute) { 
    this.userId = this._route.snapshot.params.empid;
    this.userName = this._route.snapshot.params.empname;
  }

  ngOnInit(): void {
  }

}
