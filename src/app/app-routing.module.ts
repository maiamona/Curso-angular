import { HomeComponent } from './home/home.component';

import { SobreComponent } from './sobre/sobre.component';
import { ClienteComponent } from './Home/Dashboard/cliente/cliente.component';
import { UsuarioComponent } from './Home/Dashboard/usuario/usuario.component';
import { PrincipalComponent } from './Home/Dashboard/principal/principal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './Home/login/login.component';
import { RegistrarComponent } from './Home/registrar/registrar.component';
import { AuthGuard } from './core-service/guard/auth.guard';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: 'sobre', component: SobreComponent },
      { path: 'login', component: LoginComponent }
  ]
  },
  { path: 'registrar', component: RegistrarComponent },
  {
path: 'principal', component: PrincipalComponent, canActivate: [AuthGuard],
    children: [
      { path: 'usuario', component: UsuarioComponent, canActivate: [AuthGuard] },
      { path: 'cliente', component: ClienteComponent, canActivate: [AuthGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
