import { AuthService } from './../../core-service/auth/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error = '';

  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() { /*ngOnInit()- No momento que carregamos a tela*/
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }



  login() {
    console.log("Autenticando...");
    const usuario = this.loginForm.get('username').value;
    const senha = this.loginForm.get('password').value;

    // if (this.authService.autenticar(usuario, senha)) {
    //   console.log("Usuario Autenticado.");
    //   this.router.navigate(['principal']);
    // } else {
    //   console.log("Usuario não autenticado.");
    // }

    this.authService.autenticar(usuario, senha)
      .subscribe(
        res => {
          // if (usuario == this.loginForm.get('username') && senha == this.loginForm.get('password')) {
            
          
          console.log("Usuario Autenticado.");
            this.router.navigate(['principal']);
        //   } else {
        //     console.log("Erro no Servidor.");
        //     this.router.navigate(['login']);
        //     this.error = 'Username or password is incorrect';

        //     setTimeout(function(){
        //       window.location.reload();
        //    }, 3000);
            
        //   }
         },
        
        error => {
          console.log("Erro no Servidor.");
               this.router.navigate(['login']);
            this.error = 'Username or password is incorrect';

            setTimeout(function(){
              window.location.reload();
           }, 3000);
            
          }
        
    )
  }
  
  registrar() {
    this.router.navigate(['registrar']);
  }
  
}
// quando utilizamos o "subscribe" não utilizamos o IF e ELSE
