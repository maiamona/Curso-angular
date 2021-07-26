import { TokenService } from './token.service';
import { Usuario } from './../../models/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API = "http://localhost:3000/"
  constructor(
    private http: HttpClient,
    private token: TokenService
  ) { }
  
  // autenticar(usuario: string, senha: string): boolean { /*funcão que retorna um valor booleano */
  //  if (usuario == "angular" && senha =="udemy") {
  //    return true;
  //  }
  //   return false;
  // }

  sair() {
    this.token.removerToken('usuario');
  }

  autenticar(usuario: string, senha: string) {
    return this.http.get<Usuario>(this.API + 'usuario',
      {
        params: {
          username: usuario,
          password: senha
        }
      }).pipe(
        map(res => {
        // localStorage.setItem('usuario', JSON.stringify(res));
          this.token.setarToken('usuario', JSON.stringify(res));
      })
      );
  }
}
