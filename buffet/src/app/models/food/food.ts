export class Food {
  public id: number;
  public nombre: string;
  public precio: number;
  public foto: string;
  constructor(id: number, nombre: string, precio: number, foto: string) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.foto = foto;
  }
}