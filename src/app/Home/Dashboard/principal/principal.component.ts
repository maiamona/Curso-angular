import { Router } from '@angular/router';
import { AuthService } from './../../../core-service/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  sair() {
    this.authService.sair();
    this.router.navigate(['login']);
  }

}
