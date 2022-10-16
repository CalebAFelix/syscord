import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReposicoesDeAulaComponent } from './reposicoes-de-aula.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ReposicoesDeAulaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReposicoesDeAulaRoutingModule { }
