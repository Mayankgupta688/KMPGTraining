import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'transformation',
  templateUrl: './transformation.component.html',
  styleUrls: ['./transformation.component.css']
})
export class TransformationComponent implements OnInit {
  textInput: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
