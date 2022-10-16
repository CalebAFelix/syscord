import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Usuario } from './types/Usuario';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'syscord';
  expandMenu: boolean = false;
  show: boolean = true;

  usuario: Usuario | undefined;

  constructor(
    private authService: AuthService
  ){}

  ngOnInit() {
    let usuario = this.authService.getUser();
    if(usuario) this.usuario = usuario;
    this.authService.userAuthEmitter.subscribe(usuario => {
      this.usuario = usuario;
    });
  }

  menuToggle() {
    this.expandMenu = !this.expandMenu;
  }

  sair() {
    this.authService.fazerLogout();
  }

}
