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
    //tambien actuaba cuando algo se cambio, pero no actualizaba la pantalla. Si cambiaba el array, pero la pagina ya no chequeaba el array.
  })
  constructor() {
    let pizzaMargarita = new CaracteristicasDePizza("Margarita", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmacYfueKyOuY68-SgSouQX-gxqISplXjUNuoP9TzNLw&s=10", 10, ["Tomate", "Queso", "Albaca"]);
    let pizzaCuatroQuesos = new CaracteristicasDePizza("Cuatro Quesos", "https://valledearas.com/wordpress/wp-content/uploads/2023/01/pizza-4-quesos.jpg", 15, ["Mozzarela", "Gorgonzola", "Ricotta", "Parmesano"]);
    let pizzaPepperoni = new CaracteristicasDePizza("Pepperoni", "https://www.sortirambnens.com/wp-content/uploads/2019/02/pizza-de-peperoni.jpg", 13, ["Tomate", "Queso", "Jamon"]);
    let pizzaCompleta = new CaracteristicasDePizza("Completa", "https://www.eatbetter.app/_next/image?url=https%3A%2F%2Faisparks.blob.core.windows.net%2Featbetter-cdn%2Ffood-images%2Ftam-pizza-1790346753547.webp&w=1080&q=75", 20, ["Tomate", "Queso", "Aceitunas", "Jamon", "Bacon", "Piña", "Cualquier ingrediente que pidas y no este aqui"]);
    this.pizzas = [pizzaMargarita, pizzaCuatroQuesos, pizzaPepperoni, pizzaCompleta];
    //TOLEARN Aqui creamos una clase y la ponemos en una lista que se la daremos a otra pagina
  }
}
