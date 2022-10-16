import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SolicitacoesDeAtividadeRoutingModule } from './solicitacoes-de-atividade-routing.module';
import { SolicitacoesDeAtividadeComponent } from './solicitacoes-de-atividade.component';
import { SolicitacaoComponent } from './solicitacao/solicitacao.component';
import { AtividadeComponent } from './solicitacao/atividade/atividade.component';

@NgModule({
  declarations: [
    SolicitacoesDeAtividadeComponent,
    SolicitacaoComponent,
    AtividadeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    SolicitacoesDeAtividadeRoutingModule
  ]
})
export class SolicitacoesDeAtividadeModule { }
