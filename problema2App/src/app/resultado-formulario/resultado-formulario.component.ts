import { Component, Input } from '@angular/core';
import { Client } from '../formulario/client.model';

@Component({
  selector: 'app-resultado-formulario',
  templateUrl: './resultado-formulario.component.html',
  styleUrls: ['./resultado-formulario.component.css']
})
export class ResultadoFormularioComponent {
  tituloResultado = 'Resultados';
  @Input() formValues!:any[];
  newName:string='';
  newEmail:string='';
  newMessage:string='';



}
