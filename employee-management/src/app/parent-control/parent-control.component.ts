import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'parent-control',
  templateUrl: './parent-control.component.html',
  styleUrls: ['./parent-control.component.css']
})
export class ParentControlComponent {

  @ViewChild("childInfo") childInfoComponentReference: any;

  controlChildProperty() {
    this.childInfoComponentReference.userName = "Anshul Gupta";
  }

  controlChildFunction() {
    this.childInfoComponentReference.updateUserInfo()
  }

}

@Component({
  selector: 'child-control',
  template: '<h1>User Name is {{userName}}'
})
export class ChildComponent {
  userName = "Mayank Gupta";

  updateUserInfo() {
    this.userName = "Aniket Gupta";
  }

}

