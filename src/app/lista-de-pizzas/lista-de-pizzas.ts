import { Component, input } from '@angular/core';
import { CaracteristicasDePizza } from '../models/caracteristicas-de-pizza';

@Component({
  imports: [],
  selector: 'app-lista-de-pizzas',
  styleUrl: './lista-de-pizzas.scss',
  templateUrl: './lista-de-pizzas.html',
})
export class ListaDePizzas {
  caracteristicas = input.required<CaracteristicasDePizza>();
}
