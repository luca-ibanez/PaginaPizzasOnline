import { CaracteristicasDePizza } from './caracteristicas-de-pizza';

export interface PizzaPedida {
    caracteristicas: CaracteristicasDePizza;
    cantidad: number;
}

export class Pedido {
    pizzas: PizzaPedida[] = [];
}
