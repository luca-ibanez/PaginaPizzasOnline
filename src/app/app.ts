import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pizza } from './pizza/pizza';
import { Head } from './head/head';
import { Form } from './form/form';

@Component({
  imports: [RouterOutlet, Pizza, Head, Form],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('PaginaPizzasOnline');
  ingredienteBuscado: string = "";

  buscarIngrediente(ingrediente: string) {
    this.ingredienteBuscado = ingrediente;
  }
}
