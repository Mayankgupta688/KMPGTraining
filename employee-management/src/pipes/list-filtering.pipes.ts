import {Pipe, PipeTransform} from "@angular/core"

@Pipe({
    name: "listFilter"
})
export class ListFilteringPipe implements PipeTransform {
    transform(value: [], filterValue: string, dummyString: string) {
        debugger;
        var filteredData: any = value.filter((emp: any) => {
            return emp.name.indexOf(filterValue) > -1;
        })
        return filteredData;
    }
}