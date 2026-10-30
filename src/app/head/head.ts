import { Component, inject } from '@angular/core';
import { Buscador } from '../services/buscador';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-head',
  styleUrl: './head.scss',
  templateUrl: './head.html',
})
export class Head {
  buscadorServicio = inject(Buscador);

  buscarIngrediente(ingrediente: string): void {
    this.buscadorServicio.buscarIngrediente(ingrediente);
  }
  constructor() {
    console.log("Head creado");
  }
}
//TOLEARN: Aqui pedimos a Angular una instancia del servicio Buscador y de root
//Estamos usando la misma instancia, el mismo objeto. A si que son un dato junto.
//Aqui basicamente pongo como una referencia
