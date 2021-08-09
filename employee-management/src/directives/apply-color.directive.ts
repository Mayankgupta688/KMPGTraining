
import { Directive, ElementRef, Input, HostListener } from "@angular/core";

@Directive({
    selector: 'applyBackground',
    
})
export class ApplyColorDirective {

    @Input() applyBackground: string;

    buttonIndex = 0;
    buttonColor: string = "black";
    arrayColor = ["green", "blue", "aqua", "grey"];

    constructor(private _element: ElementRef) {
        setTimeout(() => {
            this._element.nativeElement.style.color = 'aqua';
        }, 0)

        setInterval(() => {
            this.buttonIndex = (this.buttonIndex + 1) % 5;
            this._element.nativeElement.style.color = this.arrayColor[this.buttonIndex];
        }, 5000)
    }

    @HostListener("mouseover") onMouseOver() {
        this._element.nativeElement.style.color = "purple";
    }

    @HostListener("mouseleave") onMouseLeave() {
        this._element.nativeElement.style.color = "blue";
    }
}