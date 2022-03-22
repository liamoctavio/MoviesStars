import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  producto:any[] = [
    {
      nombre: 'Star Wars',
      categoria: 'Ciencia Ficcion',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipiscing elit dapibus ultricies quis lacinia, sociosqu consequat tincidunt nullam pulvinar placerat enim dui etiam inceptos. '

    },
    {
      nombre: 'Piratas del Caribe',
      categoria: 'Ciencia Ficcion',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipiscing elit dapibus ultricies quis lacinia, sociosqu consequat tincidunt nullam pulvinar placerat enim dui etiam inceptos. '

    },
    {
      nombre: 'Harry Potter',
      categoria: 'Ciencia Ficcion',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipiscing elit dapibus ultricies quis lacinia, sociosqu consequat tincidunt nullam pulvinar placerat enim dui etiam inceptos. '

    }
  ]

  constructor() {
    console.log('funcionando servicio')
   }
   obtenerProducto(){
    return this.producto
  }
  ObetenerUno(i){
    return this.producto[i];
  }
}
