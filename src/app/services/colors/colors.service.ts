import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root"})   
    // providedIn: "root" // same as App Level Scope


export class ColorService{
    public getRandomColor():string{
        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);
        const color = `rgb(${r},${g},${b})`;
        return color;
    }
}