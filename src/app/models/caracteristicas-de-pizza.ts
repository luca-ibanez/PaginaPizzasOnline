export class CaracteristicasDePizza {

    nombre: string;
    imagen: string;
    precio: number;
    listaDeIngredientes: string[];

    constructor(nombre: string, imagen: string, precio: number, listaDeIngredientes: string[]) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
        this.listaDeIngredientes = listaDeIngredientes;
    }
}
