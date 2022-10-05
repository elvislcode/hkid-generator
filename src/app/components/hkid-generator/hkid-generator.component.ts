import { Component, OnInit } from "@angular/core";
import { HkidService } from "src/app/services/hkid.service";

@Component({
    selector: 'hkid-generator',
    templateUrl: './hkid-generator.component.html',
    providers: [HkidService]
})
export class HkidGenerator implements OnInit {
    doublePrefix: boolean = false;
    hkid: string = '';
    correct: boolean = true;

    constructor(private hkidService: HkidService) { }

    ngOnInit(): void {
        this.getHkid();
    }

    getHkid(): void {
        this.hkid = this.hkidService.getHkid(this.doublePrefix);
        this.correct = true;
    }

    copyHkid(): void {
        navigator.clipboard.writeText(this.hkid);
    }

    changeHkid(event: Event): void {
        this.hkid = (event.target as HTMLInputElement).value.toUpperCase();
        this.correct = this.hkidService.validateHkid(this.doublePrefix, this.hkid);
    }
}