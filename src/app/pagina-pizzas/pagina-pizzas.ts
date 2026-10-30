import { Component } from '@angular/core';
import { Pizza } from '../pizza/pizza';

@Component({
  imports: [Pizza],
  selector: 'app-pagina-pizzas',
  styleUrl: './pagina-pizzas.scss',
  templateUrl: './pagina-pizzas.html',
})
export class PaginaPizzas {}
