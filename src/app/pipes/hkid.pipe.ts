import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'hkidPipe'
})
export class HkidPipe implements PipeTransform {
    transform(hkid: string, doublePrefix: boolean) {
        if (hkid.length <= 0)
            return '';
        else
            hkid = hkid.substring(0, 9);

        return hkid.substring(0, hkid.length - 1) + '(' + hkid.charAt(hkid.length - 1) + ')';
    }
}