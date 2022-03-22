import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  producto:any[] = [];

  constructor(private _servicio:ProductoService) { 
    this.producto = _servicio.obtenerProducto();
  }

  

  ngOnInit(): void {
  }

}
