import { TokenService } from './../auth/token.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private token: TokenService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    //validação -regras de autenticação
    if (this.token.verificarToken('usuario')) {
      console.log("Ativando Rotas");
      return true;
    } else {
      this.router.navigate(['login']);
    }
  }
}
