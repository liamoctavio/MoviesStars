import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';
import { FormularioComponent } from './formulario/formulario.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductosComponent } from './productos/productos.component';


const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'carrito/:id', component: CarritoComponent},
  {path: 'nosotros', component: NosotrosComponent},
  { path: '', component: InicioComponent , pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
