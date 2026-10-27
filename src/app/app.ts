import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pizza } from './pizza/pizza';
import { Head } from './head/head';
import { Form } from './form/form';
import { ContactForm } from './contact-form/contact-form';

@Component({
  imports: [RouterOutlet, Pizza, Head, Form, ContactForm],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('PaginaPizzasOnline');
}
