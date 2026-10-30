import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Head } from './head/head';

@Component({
  imports: [RouterOutlet, Head],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('PaginaPizzasOnline');
}
