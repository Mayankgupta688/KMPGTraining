import { Component, OnInit, EventEmitter } from '@angular/core';
import { BehaviorSubject, Subject, ReplaySubject, AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-subject-info',
  templateUrl: './subject-info.component.html',
  styleUrls: ['./subject-info.component.less']
})
export class SubjectInfoComponent implements OnInit {

  randomNumber: number = 0;
  userSubject: BehaviorSubject<any> = new BehaviorSubject(45);
  constructor() { }

  ngOnInit(): void {

    this.userSubject.next(100);
    this.userSubject.next(150);

    this.userSubject.subscribe((data) => {
      debugger;
      alert(data);
      this.randomNumber = data;
    })  
  }

  updatData() {
    this.userSubject.next(Math.floor(Math.random() * 1000));
  }

}
