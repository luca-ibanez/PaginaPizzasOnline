import { Component } from '@angular/core';
import { ListaDePizzas } from '../lista-de-pizzas/lista-de-pizzas';
import { CaracteristicasDePizza } from '../models/caracteristicas-de-pizza';

@Component({
  imports: [ListaDePizzas],
  selector: 'app-pizza',
  styleUrl: './pizza.scss',
  templateUrl: './pizza.html',
})
export class Pizza { 
  pizzas: CaracteristicasDePizza[] = [];
  constructor() {
    let pizzaMargarita = new CaracteristicasDePizza("Margarita", "https://images.icon-icons.com/2070/PNG/512/pizza_icon_125948.png", 10, ["Tomate", "Queso", "Albaca"]);
    let pizzaCuatroQuesos = new CaracteristicasDePizza("Cuatro Quesos", "https://images.icon-icons.com/2070/PNG/512/pizza_icon_125948.png", 15, ["Mozzarela", "Gorgonzola", "Ricotta", "Parmesano"]);
    let pizzaPepperoni = new CaracteristicasDePizza("Pepperoni", "https://images.icon-icons.com/2070/PNG/512/pizza_icon_125948.png", 13, ["Tomate", "Queso", "Jamon"]);
    let pizzaCompleta = new CaracteristicasDePizza("Completa", "https://images.icon-icons.com/2070/PNG/512/pizza_icon_125948.png", 20, ["Tomate", "Queso", "Aceitunas", "Jamon", "Bacon", "Piña", "Cualquier ingrediente que pidas y no este aqui"]);
    this.pizzas = [pizzaMargarita, pizzaCuatroQuesos, pizzaPepperoni, pizzaCompleta];
  }
  //Osea he hecho una clase (CaracteristicasDePizza) para que el componenete pizza con un if se la pasara a varias lista-de-pizzas cuales toman los valores de esa clase para usarlos
}
