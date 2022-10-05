import { Injectable } from "@angular/core";

@Injectable()
export class HkidService {
    private hkidChars: { [key: string]: number } = {
        "0": 0,
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "A": 10,
        "B": 11,
        "C": 12,
        "D": 13,
        "E": 14,
        "F": 15,
        "G": 16,
        "H": 17,
        "I": 18,
        "J": 19,
        "K": 20,
        "L": 21,
        "M": 22,
        "N": 23,
        "O": 24,
        "P": 25,
        "Q": 26,
        "R": 27,
        "S": 28,
        "T": 29,
        "U": 30,
        "V": 31,
        "W": 32,
        "X": 33,
        "Y": 34,
        "Z": 35,
        " ": 36
    };

    getHkid(doublePrefix: boolean = false): string {
        let hkid = '';

        if (doublePrefix)
            hkid += this.getRandomChar('letter');
        hkid += this.getRandomChar('letter');
        for (let i = 0; i < 6; i++)
            hkid += this.getRandomChar('number');
        hkid += this.getCheckDigit(doublePrefix, hkid);

        return hkid;
    }

    validateHkid(doublePrefix: boolean = false, hkid: string): boolean {
        if (!((doublePrefix && hkid.length == 9) || (!doublePrefix && hkid.length == 8)))
            return false;

        if (!((doublePrefix && hkid.match(/^[A-Z]{2}/)) || (!doublePrefix && hkid.match(/^[A-Z]/))))
            return false;

        return (this.getCheckDigit(doublePrefix, hkid.substring(0, hkid.length - 1)) == hkid.charAt(hkid.length - 1)) ? true : false;
    }


    private getRandomChar(charType: string): string {
        const numbers = '0123456789';
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const chars = (charType == 'number') ? numbers : letters;

        return chars.charAt(Math.floor(Math.random() * chars.length));
    }

    private getCheckDigit(doublePrefix: boolean = false, hkid: string): string {
        let checkDigit: string;
        let number: number = 0;

        if (!doublePrefix)
            hkid = ' ' + hkid;

        for (let i = 0; i < 8; i++)
            number += this.hkidChars[hkid.charAt(i)] * (9 - i);

        number %= 11;

        if (number == 0) {
            checkDigit = '0';
        } else {
            number = 11 - number;
            if (number == 10)
                checkDigit = 'A';
            else
                checkDigit = number.toString();
        }

        return checkDigit;
    }
}