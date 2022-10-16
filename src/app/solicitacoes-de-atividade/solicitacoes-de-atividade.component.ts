import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Usuario } from '../types/Usuario';
import { SolicitacoesDeAtividadeService } from './services/solicitacoes-de-atividade.service';
import { SolicitacaoDeAtividade } from './types/SolicitacaoDeAtividade';

@Component({
  selector: 'app-solicitacoes-de-atividade',
  templateUrl: './solicitacoes-de-atividade.component.html',
  styleUrls: ['./solicitacoes-de-atividade.component.scss']
})
export class SolicitacoesDeAtividadeComponent implements OnInit {

  solicitacoes: SolicitacaoDeAtividade[] = [];
  usuario: Usuario | undefined;

  constructor(
    private service: SolicitacoesDeAtividadeService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.usuario = this.authService.getUser();
    if(this.usuario?.tipo === 'ALUNO') {
      this.listByAlunoId(this.usuario.id);
    } else if (this.usuario?.tipo === 'COORDENADOR') {
      this.listByCursoId(this.usuario.cursoId);
    }
  }

  listByAlunoId(alunoId: number) {
    this.service.listByAlunoId(alunoId).subscribe(solicitacoes => {
      this.solicitacoes = solicitacoes;
    });
  }

  listByCursoId(cursoId: number) {
    this.service.listByCursoId(cursoId).subscribe(solicitacoes => {
      this.solicitacoes = solicitacoes;
    });
  }

}
