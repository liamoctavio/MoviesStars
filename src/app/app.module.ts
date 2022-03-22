import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductoService } from './producto.service';
import { ProductosComponent } from './productos/productos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    NavegacionComponent,
    FormularioComponent,
    ProductosComponent,
    CarritoComponent,
    NosotrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
