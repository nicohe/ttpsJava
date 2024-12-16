import { Estructura } from "../estructura/estructura";

export class Menu {
    id: number;
  nombre: string;
  precio: number;
  estructuras: Estructura[];

  constructor(id: number, nombre: string, precio: number, estructuras: Estructura[]) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.estructuras = estructuras;
  }
}