import { Component } from '@angular/core';
import { Cliente } from './cliente.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  tituloAlta= "Alta Cliente";
  tituloListado="Listado Clientes";

  clientes:Cliente[] = [
    new Cliente("Cliente 1", "B 123", "C/la la la", "1"),
    new Cliente("Cliente 2", "A 334", "Av. lo lo lo", "2"),
  ];

  boxName:string="";
  boxCif:string="";
  boxAdress:string="";
  boxGrupo:string="";

  addClient(){
    let newClient = new Cliente(this.boxName, this.boxCif, this.boxAdress, this.boxGrupo);
    this.clientes.push(newClient);
  }

}
