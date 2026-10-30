import { Component, inject } from '@angular/core';
import { Form } from '../form/form';
import { PedidoService } from '../services/pedido.service';

@Component({
  imports: [Form],
  selector: 'app-pagina-pedidos',
  styleUrl: './pagina-pedidos.scss',
  templateUrl: './pagina-pedidos.html',
})
export class PaginaPedidos {
  pedidoServicio = inject(PedidoService);
  //TOLEARN Aqui cojemos los objetos del servicio
}
