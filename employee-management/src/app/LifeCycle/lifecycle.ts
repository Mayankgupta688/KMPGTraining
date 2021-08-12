import { Component, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'view-properties',
  template: '<h1></h1>'
})
export class ViewPropertiesComponent{

  userName: string;
  userAge: string;
  constructor() { 
    this.userName = "Mayank Gupta";
    this.userAge = "20";
  }

  getValue(stringValue: string) {
    alert(stringValue);
  } 

  ngAfterContentInit() {

  }

  ngDoChanges() {

  }

  ngAfterContentChecked() {
    debugger;
  }

  ngAfterViewInit() {
    debugger;
  }

  ngAfterViewChecked() {
    debugger;
  }

  ngOnDestroy() {
    
  }
}

@Component({
  selector: 'view-child-properties',
  template: '<h1>This is Sub Child of the Component for {{userNameData}}</h1>'
})
export class ViewChildPropertiesComponent implements OnInit, OnChanges {

  @Input() userNameData;
  @Input() userAgeData;

  constructor() {
    debugger;
  }

  ngOnInit() {
    debugger;
  }

  ngOnChanges(change) {
    debugger;
  }
  
  ngAfterViewInit() {
    debugger;
  }

}
