import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-form',
  styleUrl: './form.scss',
  templateUrl: './form.html',
})
export class Form {

  contactForm = new FormGroup({
    hora: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    numeroTarjeta: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
    numeroTelefono: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]),
  });
  //TOLEARN Los input son type=text para esto, ya que si no lo fueran los Validators.minLength y maxLength no funcionarian.

  get hora() {
    return this.contactForm.get('hora');
  }

  get direccion() {
    return this.contactForm.get('direccion');
  }

  get numeroTarjeta() {
    return this.contactForm.get('numeroTarjeta');
  }

  get numeroTelefono() {
    return this.contactForm.get('numeroTelefono');
  }

  sendMessage() {
    if (this.direccion?.invalid == true) {
      alert("¡Falta la direccion!");
    } else if (this.hora?.invalid == true) {
      alert("¡Falta la hora!");
    } else if ((this.ocultarTarjeta == false && this.ocultarBizun == true) && this.numeroTarjeta?.invalid == true) {
      alert("¡El numero de la tarjeta debe tener 16 numeros!");
    } else if ((this.ocultarBizun == false && this.ocultarTarjeta == true) && this.numeroTelefono?.invalid == true) {
      alert("¡El numero de telefono tiene que tener 9 numeros!");
    } else {
      alert('Ya esta! Se enviara todo a '+ this.contactForm.value.direccion + ' y llegara a las ' + this.contactForm.value.hora);
    }
  }

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
