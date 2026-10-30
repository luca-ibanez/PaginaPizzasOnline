import { Component, EventEmitter, Output } from '@angular/core';
import { CaracteristicasDePizza } from '../models/caracteristicas-de-pizza';

@Component({
  imports: [],
  selector: 'app-head',
  styleUrl: './head.scss',
  templateUrl: './head.html',
})
export class Head {
  @Output() ingredienteBuscado = new EventEmitter<string>();

  buscarIngrediente(ingrediente: string) {
    this.ingredienteBuscado.emit(ingrediente)
  }
}
