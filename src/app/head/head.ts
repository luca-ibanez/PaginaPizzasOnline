import { Component, EventEmitter, Output } from '@angular/core';
import { CaracteristicasDePizza } from '../models/caracteristicas-de-pizza';
import { Pedido } from '../models/pedido';

@Component({
  imports: [],
  selector: 'app-head',
  styleUrl: './head.scss',
  templateUrl: './head.html',
})
export class Head {
  @Output() ingredienteBuscado = new EventEmitter<string>();
  pedido = new Pedido();

  agregarPizza(evento: {
    caracteristicas: CaracteristicasDePizza;
    cantidad: number;
  }): void {
    const existente = this.pedido.pizzas.find(
      item => item.caracteristicas === evento.caracteristicas
    );

    if (existente) {
      existente.cantidad += evento.cantidad;
    } else {
      this.pedido.pizzas.push({
        caracteristicas: evento.caracteristicas,
        cantidad: evento.cantidad
      });
    } //Esto chequea si ya hay una pizza de ese tipo, y si ya hay una, entonces solo aumenta la cantidad en 1
  }

  buscarIngrediente(ingrediente: string) {
    this.ingredienteBuscado.emit(ingrediente)
  }
}
