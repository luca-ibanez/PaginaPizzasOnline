import { Routes } from '@angular/router';
import { PaginaPizzas } from './pagina-pizzas/pagina-pizzas';
import { PaginaPedidos } from './pagina-pedidos/pagina-pedidos';

export const routes: Routes = [
    {path: '', redirectTo: 'pizzas', pathMatch: 'full'},
    {path: 'pizzas', component: PaginaPizzas},
    {path: 'pedidos', component: PaginaPedidos}
];
//TOLEARN basicamente si despues de localhost no hay nada, manda a pizzas. Si es localhost/(pagina) manda a la pagina en question