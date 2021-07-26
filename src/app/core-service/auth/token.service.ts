import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  setarToken(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  removerToken(key: string) {
    localStorage.removeItem(key);
  }

  verificarToken(key: string): boolean{
    let logado: boolean = false;
    const user = localStorage.getItem(key);
    if (user != null && user != undefined) {
      logado = true;
    }
    return logado;
  }
}
