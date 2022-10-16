import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../types/Usuario';
import { LocalStorageService } from './local-storage.service';
import { ToastsService } from './toasts.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarios: Usuario[] = [
    {
      id: 1,
      login: 'Samuel',
      senha: 's4mu3l',
      nome: 'Samuel Alves Soares',
      matricula: '0001',
      tipo: 'COORDENADOR',
      cursoId: 1
    },
    {
      id: 2,
      login: 'Rubens',
      senha: 'rub3ns',
      nome: 'Rubens Maciel Miranda Pinheiro',
      matricula: '0002',
      tipo: 'COORDENADOR',
      cursoId: 2
    },
    {
      id: 3,
      login: 'Caleb',
      senha: 'c4l3b',
      nome: 'Caleb de Almeida Felix',
      matricula: '0003',
      tipo: 'ALUNO',
      cursoId: 1
    },
    {
      id: 4,
      login: 'Larissa',
      senha: 'l4riss4',
      nome: 'Larissa Ricarte Mota',
      matricula: '0004',
      tipo: 'ALUNO',
      cursoId: 2
    },
    {
      id: 5,
      login: 'Pedro',
      senha: 'p3dr0',
      nome: 'Pedro Gabriel Morera Dimas',
      matricula: '0005',
      tipo: 'ALUNO',
      cursoId: 1
    },
  ];

  userAuthEmitter = new EventEmitter<Usuario>();

  usuarioAutenticado: Usuario | undefined;

  constructor(
    private router: Router,
    private toastService: ToastsService,
    private localStorageService: LocalStorageService
  ) { }

  fazerLogin(usuario: Usuario) {
    this.usuarioAutenticado = this.usuarios.find(u => u.login === usuario.login && u.senha === usuario.senha);
    if(!this.usuarioAutenticado) {
      this.toastService.new({
        title: 'Falha ao logar',
        body: 'Usuário e/ou senha inválidos, verifique os dados e tente novamente',
        classname: 'bg-danger text-light',
        delay: 10000
      });
      return;
    };
    this.localStorageService.set('USER', this.usuarioAutenticado);
    this.userAuthEmitter.emit(this.usuarioAutenticado);
    this.router.navigate(['/']);
  }

  fazerLogout() {
    this.localStorageService.remove('USER');
    this.userAuthEmitter.emit();
    this.router.navigate(['/login']);
  }

  getUser() {
    return this.usuarioAutenticado || this.localStorageService.get('USER');
  }
}
