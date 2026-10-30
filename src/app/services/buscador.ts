import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Buscador {

    ingredienteBuscado = signal<string>('');

    buscarIngrediente(ingrediente: string): void {
        this.ingredienteBuscado.set(ingrediente);
        console.log("Guardando ingrediente:", ingrediente);
    }
}

//TOLEARN: Esto es un servicio de Angular
// Injectable es para que Angular pueda proporcionar el servicio a otros componentes
// providedIn es para que la unica instancia sea compartida
// signal es una variable especial que almacena un valor y automaticamente avisa a Angular cuando el valor cambia