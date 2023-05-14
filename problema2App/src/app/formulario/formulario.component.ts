import { Component } from '@angular/core';
import { Client } from './client.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  tituloContacto = 'Formulario de Contacto';

  formulario: FormGroup;

  nombre: string = '';
  email: string = '';
  mensaje: string = '';
  validacion: string = '';
  formValues: any[] = [];

  constructor(private forms: FormBuilder) {
    this.formulario = this.forms.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required],
      validacion: ['', [Validators.required]],
    });
  }

  addClient() {
    if (this.formulario.valid) {
      let valores = {
        nombre: this.formulario.get('nombre')?.value,
        email: this.formulario.get('email')?.value,
        mensaje: this.formulario.get('mensaje')?.value,
        validacion: this.formulario.get('validacion')?.value,
      };
      this.formValues.push(valores);
      this.limpiar();
    } else {
      alert('No se ha podido realizar la inserción');
    }
  }

  limpiar() {
    this.nombre = '';
    this.email = '';
    this.mensaje = '';
    this.validacion = '';
  }
}
