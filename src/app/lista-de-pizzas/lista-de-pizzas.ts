import { Component, input, output } from '@angular/core';
import { CaracteristicasDePizza } from '../models/caracteristicas-de-pizza';
import { FormsModule, ɵInternalFormsSharedModule } from '@angular/forms';

@Component({
  imports: [FormsModule, ɵInternalFormsSharedModule],
  selector: 'app-lista-de-pizzas',
  styleUrl: './lista-de-pizzas.scss',
  templateUrl: './lista-de-pizzas.html',
})
export class ListaDePizzas {
  caracteristicas = input.required<CaracteristicasDePizza>();

  anadirPizza = output<{caracteristicas: CaracteristicasDePizza; cantidad: number}>();
  cantidad: string = "";

  AnadirPizza(): void {
    //TODO: Añadir proceso que pase al clickear en esto
  }
}
