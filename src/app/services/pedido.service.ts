import { Injectable, signal } from '@angular/core';
import { Pedido } from '../models/pedido';
import { CaracteristicasDePizza } from '../models/caracteristicas-de-pizza';

@Injectable({
    providedIn: 'root'
})
export class PedidoService {
    pedido = signal<Pedido>(new Pedido());
    //TOLEARN Aqui guardamos el pedido
    anadirPizza(caracteristicas: CaracteristicasDePizza, cantidad: number): void {
        //TOLEARN este metodo recibe dos cosas, las caracteristicas de la pizza y la cantidad a comprar
        const pedidoActual = this.pedido();
        const pizzaExistente = pedidoActual.pizzas.find(
            p => p.caracteristicas.nombre === caracteristicas.nombre
        ); //TOLEARN Aqui comprueba si existe

        if (pizzaExistente) {
            pizzaExistente.cantidad = pizzaExistente.cantidad + cantidad ;
        } else {
            pedidoActual.pizzas.push({
                caracteristicas: caracteristicas,
                cantidad: cantidad
            });
        }
        this.pedido.set({...pedidoActual});
        //TOLEARN los ... son para copiar las propiedades de un objeto a otro.
        //Aqui creamos un objeto pedido con ...pedidoActual para entregarlo devuelta al signal para que signal detecte que ha recibido una referencia diferente
    }

    vaciarPedido(): void {
        this.pedido.set(new Pedido());
    } //TOLEARN esto es para vaciar el pedido
}
