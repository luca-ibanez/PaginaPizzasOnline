import { Component, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-form',
  styleUrl: './form.scss',
  templateUrl: './form.html',
})
export class Form {
  eventClick = output();
  ocultarBizun = false;
  ocultarTarjeta = true;

  public bizumChecked() {
    this.ocultarBizun = false;
    this.ocultarTarjeta = true;
  }

  public tarjetaChecked() {
    this.ocultarBizun = true;
    this.ocultarTarjeta = false;
  }
}
