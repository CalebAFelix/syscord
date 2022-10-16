import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

import { TipoDeAtividade } from '../types/TipoDeAtividade';
import { Usuario } from '../types/Usuario';
import { TiposDeAtividadeService } from './services/tipos-de-atividade.service';

@Component({
  selector: 'app-tipos-de-atividade',
  templateUrl: './tipos-de-atividade.component.html',
  styleUrls: ['./tipos-de-atividade.component.scss']
})
export class TiposDeAtividadeComponent implements OnInit {

  usuario: Usuario | undefined;
  tiposDeAtividade: TipoDeAtividade[] = [];

  constructor(
    private tiposDeAtividadeService: TiposDeAtividadeService,
    private authService: AuthService,
  ) {
    
  }


  ngOnInit(): void {
    this.usuario = this.authService.getUser();
    if(this.usuario?.id) {
      this.tiposDeAtividadeService.listAllByCursoId(this.usuario?.cursoId).subscribe(tiposDeAtividade => {
        this.tiposDeAtividade = tiposDeAtividade;
      });
    }

  }

}
