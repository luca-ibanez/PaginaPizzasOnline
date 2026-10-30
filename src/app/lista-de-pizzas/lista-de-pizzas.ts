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
    const cantidadEnInt = Number(this.cantidad);

    if (!Number.isInteger(cantidadEnInt) || cantidadEnInt <= 0) {
      return;
    } //TOLEARN Aqui coge la cantidad y comprueba que sea un numero/no 0

    this.anadirPizza.emit({
      caracteristicas: this.caracteristicas(),
      cantidad: cantidadEnInt
    }); //TOLEARN Aqui emite un objeto con la pizza y la cantidad

    this.cantidad = ""; //Esto vacia el input
  }
}
