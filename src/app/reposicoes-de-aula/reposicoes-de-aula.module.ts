import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReposicoesDeAulaRoutingModule } from './reposicoes-de-aula-routing.module';
import { ReposicoesDeAulaComponent } from './reposicoes-de-aula.component';


@NgModule({
  declarations: [
    ReposicoesDeAulaComponent
  ],
  imports: [
    CommonModule,
    ReposicoesDeAulaRoutingModule
  ]
})
export class ReposicoesDeAulaModule { }
