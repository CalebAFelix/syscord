import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitacaoComponent } from './solicitacao/solicitacao.component';
import { SolicitacoesDeAtividadeComponent } from './solicitacoes-de-atividade.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: SolicitacoesDeAtividadeComponent },
  { path: 'new', component: SolicitacaoComponent },
  { path: ':id', component: SolicitacaoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitacoesDeAtividadeRoutingModule { }
