import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';
import { ToastsService } from 'src/app/services/toasts.service';
import { Usuario } from 'src/app/types/Usuario';

import { SolicitacoesDeAtividadeService } from '../services/solicitacoes-de-atividade.service';
import { Atividade } from '../types/Atividade';
import { AtividadeComponent } from './atividade/atividade.component';

@Component({
  selector: 'app-solicitacao',
  templateUrl: './solicitacao.component.html',
  styleUrls: ['./solicitacao.component.scss']
})
export class SolicitacaoComponent implements OnInit {

  atividades: Atividade[] = [];
  usuario: Usuario | undefined;
  solicitacaoId: number | undefined;

  constructor(
    private modalService: NgbModal,
    private service: SolicitacoesDeAtividadeService,
    private router: Router,
    private toastService: ToastsService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.usuario = this.authService.getUser();
    this.solicitacaoId = this.route.snapshot.params['id'];
    if(this.solicitacaoId) {
      console.log(this.solicitacaoId);
      this.listBySolicitacaoId(this.solicitacaoId);
    } else {
      this.openModalAtividade();
    }
  }

  openModalAtividade() {
    const modalRef = this.modalService.open(AtividadeComponent, { size: 'lg', centered: true });
    modalRef.closed.subscribe((data) => {
      if(!data) return;
      this.atividades.push(data);
    });
  }

  createSolicitacao() {
    if(!this.usuario) return;
    if(this.atividades.length === 0) {
      this.toastService.new({
        title: 'Operação inválida',
        body: 'É necessário cadastrar pelo menos uma atividade para gerar a Solicitação.',
        classname: 'bg-danger text-light',
        delay: 10000
      });
      return;
    }
    this.service.create(this.atividades, this.usuario?.id).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  listBySolicitacaoId(solicitacaoId: number) {
    this.service.listAtividadesBySolicitacaoId(solicitacaoId).subscribe(atividades => {
      this.atividades = atividades;
    });
  }

  validarAtividade(atividadeId: number) {
    const modalRef = this.modalService.open(AtividadeComponent, { size: 'xl', centered: true });
    modalRef.closed.subscribe((data) => {
      if(!data) return;
      this.atividades.push(data);
    });
    modalRef.componentInstance.atividades = this.atividades.filter(a => a.situacao ===  'VALIDA' || a.situacao ===  'INVALIDA');
    modalRef.componentInstance.atividade = this.atividades.find(a => a.id === atividadeId);
  }

  registrarSolicitacao() {
    console.log('Registrar Solicitação');
  }

}
