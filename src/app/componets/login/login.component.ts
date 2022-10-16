import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../types/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = {id: 0, login: '', senha: '', nome: '', matricula: '', tipo: '', cursoId: 0};

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.fazerLogout();
  }

  fazerlogin() {
    this.authService.fazerLogin(this.usuario);
  }
}
