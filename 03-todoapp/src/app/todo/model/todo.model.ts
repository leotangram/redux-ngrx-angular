export class Todo {
  constructor(
    public texto?: string,
    public completado?: boolean,
    public id?: number
  ) {
    texto = texto.charAt(0).toUpperCase() + texto.slice(1)
    id = Math.random()
  }
}