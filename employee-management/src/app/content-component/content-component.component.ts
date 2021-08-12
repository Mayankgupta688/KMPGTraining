import { Component } from '@angular/core';

@Component({
  selector: 'content-component',
  template: `
    <emp-list>
      <h1>akudgsaugda</h1>
    </emp-list>
  `,
  styleUrls: ['./content-component.component.css']
})
export class ContentComponentComponent {

  constructor() { }

  ngAfterContentInit() {
    debugger;
  }

  ngAfterViewInit() {
    debugger;
  }

}
