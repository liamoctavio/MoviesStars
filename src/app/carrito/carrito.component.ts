import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  producto:any[] = [];

  constructor(
    private ruta:ActivatedRoute,
    private _servicio:ProductoService
  ) { 
    this.ruta.params.subscribe(params=>{
      console.log(params['id'])
      // this.producto = this._servicio.ObetenerUno(params['id']);
      this.producto.push(_servicio.ObetenerUno(params['id']));
    })
  }

  ngOnInit(): void {
  }

}
