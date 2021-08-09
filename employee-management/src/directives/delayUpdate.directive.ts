import { Directive, OnInit, TemplateRef, ViewContainerRef, Input } from "@angular/core";
import { EmployeeDetailsServices } from "src/services/employee-details.services";


@Directive({
    selector: "[delayUpdate]"
})
export class DelayUpdateDirective implements OnInit {

    @Input() delayUpdate: number;
    constructor(
        private _containerRef: ViewContainerRef,
        private _templateRef: TemplateRef<any>,
        private _employeeDetailsServices: EmployeeDetailsServices
    ){ }

    ngOnInit() {
        setTimeout(() => {
            this._containerRef.createEmbeddedView(this._templateRef);
        }, this.delayUpdate)
    }
}