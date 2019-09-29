import { Component } from '@angular/core';

@Component ({
    selector: "app-body",
    templateUrl: "./body.component.html",
    styleUrls: ['./body.component.css']
})
export class BodyComponent {
    mostrar = true;

    frase:any = {
        autor: "Eze",
        mensaje: "Hola soy el eze"
    };

    personajes: string[] = ["Ashe", "Yummi", "Zyra", "Blitzcrank", "Xayah"]
}