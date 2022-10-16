import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoDeAtividadeComponent } from './tipo-de-atividade/tipo-de-atividade.component';
import { TiposDeAtividadeComponent } from './tipos-de-atividade.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: TiposDeAtividadeComponent },
  { path: ':id', component: TipoDeAtividadeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiposDeAtividadeRoutingModule { }
