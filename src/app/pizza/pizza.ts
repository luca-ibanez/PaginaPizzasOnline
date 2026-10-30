import { Component, inject, computed } from '@angular/core';
import { ListaDePizzas } from '../lista-de-pizzas/lista-de-pizzas';
import { CaracteristicasDePizza } from '../models/caracteristicas-de-pizza';
import { Buscador } from '../services/buscador';
import { PedidoService } from '../services/pedido.service';

@Component({
  imports: [ListaDePizzas],
  selector: 'app-pizza',
  styleUrl: './pizza.scss',
  templateUrl: './pizza.html',
})

export class Pizza { 
  private buscador = inject(Buscador);
  private pedidoServicio = inject(PedidoService);

  anadirAlPedido(evento: { caracteristicas: CaracteristicasDePizza; cantidad: number }): void {
    this.pedidoServicio.anadirPizza(evento.caracteristicas, evento.cantidad);
  }

  pizzas: CaracteristicasDePizza[] = [];
  pizzasFiltradas = computed(() => {
    const ingrediente = this.buscador.ingredienteBuscado().trim().toLowerCase();
    if (!ingrediente) {
      return this.pizzas;
    }
    return this.pizzas.filter(pizza => pizza.listaDeIngredientes.some(i => i.toLowerCase().includes(ingrediente)));
    //TOLEARN Aqui esto hace que si no se ha buscado nada, se pase toda la lista
    //el trim y lowercase es para hacer que el valor del buscador no tenga espacios al principio o final (trim) y sea en minusculas
    //Antes usabamos un effect() pero entonces solo reaccionaba cuando se cambiaba de pagina...
    //TOLEARN2 Ok, eso es porque computed() hace que la variable en si sea lo que da despues de todo, mientras que effect()
    //tambien actuaba cuando algo se cambio, pero no actualizaba la pantalla. Si cambiaba el array, pero la pagina ya no chequeo el array.
  })
  constructor() {
    let pizzaMargarita = new CaracteristicasDePizza("Margarita", "https://images.icon-icons.com/2070/PNG/512/pizza_icon_125948.png", 10, ["Tomate", "Queso", "Albaca"]);
    let pizzaCuatroQuesos = new CaracteristicasDePizza("Cuatro Quesos", "https://images.icon-icons.com/2070/PNG/512/pizza_icon_125948.png", 15, ["Mozzarela", "Gorgonzola", "Ricotta", "Parmesano"]);
    let pizzaPepperoni = new CaracteristicasDePizza("Pepperoni", "https://images.icon-icons.com/2070/PNG/512/pizza_icon_125948.png", 13, ["Tomate", "Queso", "Jamon"]);
    let pizzaCompleta = new CaracteristicasDePizza("Completa", "https://images.icon-icons.com/2070/PNG/512/pizza_icon_125948.png", 20, ["Tomate", "Queso", "Aceitunas", "Jamon", "Bacon", "Piña", "Cualquier ingrediente que pidas y no este aqui"]);
    this.pizzas = [pizzaMargarita, pizzaCuatroQuesos, pizzaPepperoni, pizzaCompleta];
    //TOLEARN Aqui creamos una clase y la ponemos en una lista que se la daremos a otra pagina
  }
}
