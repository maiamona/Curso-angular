import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { LoginComponent } from './Home/login/login.component';
import { RegistrarComponent } from './Home/registrar/registrar.component';
import { AppRoutingModule } from './app-routing.module';
import { MensagemComponent } from './Shared/mensagem/mensagem.component';
import { PrincipalComponent } from './Home/Dashboard/principal/principal.component';
import { UsuarioComponent } from './Home/Dashboard/usuario/usuario.component';
import { ClienteComponent } from './Home/Dashboard/cliente/cliente.component';
import { SobreComponent } from './sobre/sobre.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarComponent,
    MensagemComponent,
    PrincipalComponent,
    UsuarioComponent,
    ClienteComponent,
    SobreComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, // importar sempre os modulos FormsModule e ReactiveFormsModule sempre que trabalhar com formularios (Form) em Angular
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
