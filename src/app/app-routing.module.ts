import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './componets/login/login.component';

const routes: Routes = [
  { path:'', pathMatch: 'full', redirectTo: 'solicitacoes-de-atividade' },
  {
    path: 'solicitacoes-de-atividade',
    loadChildren: () => import('./solicitacoes-de-atividade/solicitacoes-de-atividade.module').then(m => m.SolicitacoesDeAtividadeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'reposicoes-de-aula',
    loadChildren: () => import('./reposicoes-de-aula/reposicoes-de-aula.module').then(m => m.ReposicoesDeAulaModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'tipos-de-atividade',
    loadChildren: () => import('./tipos-de-atividade/tipos-de-atividade.module').then(m => m.TiposDeAtividadeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
