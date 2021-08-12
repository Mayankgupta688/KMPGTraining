import { Component, Input, NgModule, OnChanges, OnInit, QueryList, SimpleChange, ViewChild, ViewChildren } from '@angular/core';
import { NgModel } from "@angular/forms"

@Component({
  selector: 'view-properties',
  templateUrl: './view-properties.component.html',
  styleUrls: ['./view-properties.component.css']
})
export class ViewPropertiesComponent{


  userName: string = "Mayank Gupta";
  userAge: string = "20"; 

  @ViewChild("userNameReference") domReference;
  @ViewChild(NgModel) domAgeReference: NgModel;

  @ViewChildren(NgModel) modelObjects: QueryList<NgModel>

  ngAfterViewInit() {

    debugger;
    this.domReference.nativeElement.focus();
    this.domReference.nativeElement.style.color = "red";

    this.domAgeReference.valueChanges.subscribe(() => {
      alert("Age Data Updated...")
    })

    console.log(this.modelObjects.length)
  }

  getValue(data) {}
}
