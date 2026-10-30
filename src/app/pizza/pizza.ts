import { Component, Input, OnChanges, output, SimpleChanges } from '@angular/core';
import { ListaDePizzas } from '../lista-de-pizzas/lista-de-pizzas';
import { CaracteristicasDePizza } from '../models/caracteristicas-de-pizza';

@Component({
  imports: [ListaDePizzas],
  selector: 'app-pizza',
  styleUrl: './pizza.scss',
  templateUrl: './pizza.html',
})

export class Pizza implements OnChanges { 
  @Input() ingredienteBuscado: string = "";

  pizzas: CaracteristicasDePizza[] = [];
  pizzasFiltradas: CaracteristicasDePizza[] = [];
  constructor() {
    let pizzaMargarita = new CaracteristicasDePizza("Margarita", "https://images.icon-icons.com/2070/PNG/512/pizza_icon_125948.png", 10, ["Tomate", "Queso", "Albaca"]);
    let pizzaCuatroQuesos = new CaracteristicasDePizza("Cuatro Quesos", "https://images.icon-icons.com/2070/PNG/512/pizza_icon_125948.png", 15, ["Mozzarela", "Gorgonzola", "Ricotta", "Parmesano"]);
    let pizzaPepperoni = new CaracteristicasDePizza("Pepperoni", "https://images.icon-icons.com/2070/PNG/512/pizza_icon_125948.png", 13, ["Tomate", "Queso", "Jamon"]);
    let pizzaCompleta = new CaracteristicasDePizza("Completa", "https://images.icon-icons.com/2070/PNG/512/pizza_icon_125948.png", 20, ["Tomate", "Queso", "Aceitunas", "Jamon", "Bacon", "Piña", "Cualquier ingrediente que pidas y no este aqui"]);
    this.pizzas = [pizzaMargarita, pizzaCuatroQuesos, pizzaPepperoni, pizzaCompleta];
    this.pizzasFiltradas = this.pizzas;
  }
  //Osea he hecho una clase (CaracteristicasDePizza) para que el componenete pizza con un if se la pasara a varias lista-de-pizzas cuales toman los valores de esa clase para usarlos

  ngOnChanges() {
    const ingrediente = this.ingredienteBuscado.trim().toLowerCase();

    if (!ingrediente) {
      this.pizzasFiltradas = this.pizzas;
      return;
    }

    this.pizzasFiltradas = this.pizzas.filter(pizza => pizza.listaDeIngredientes.some(i => i.toLowerCase().includes(ingrediente)))
  }
}
