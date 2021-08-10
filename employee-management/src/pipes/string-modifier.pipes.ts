import {Pipe, PipeTransform} from "@angular/core"

@Pipe({
    name: "convertSpacesToUnderscore"
})
export class StringModifierPipe implements PipeTransform {
    transform(value: string, charToReplace, replacementChar) {
        return value.replaceAll(charToReplace, replacementChar);
    }
}