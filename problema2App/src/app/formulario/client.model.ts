export class Client {
  nombre: string = '';
  email: string = '';
  mensaje: string = '';
  validacion: string = '';

  constructor(
    nombre: string,
    email: string,
    mensaje: string,
    validacion: string
  ) {
    this.nombre = nombre;
    this.email = email;
    this.mensaje = mensaje;
    this.validacion = validacion;
  }
}
