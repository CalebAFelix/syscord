import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiposDeAtividadeRoutingModule } from './tipos-de-atividade-routing.module';
import { TipoDeAtividadeComponent } from './tipo-de-atividade/tipo-de-atividade.component';
import { TiposDeAtividadeComponent } from './tipos-de-atividade.component';


@NgModule({
  declarations: [
    TipoDeAtividadeComponent,
    TiposDeAtividadeComponent
  ],
  imports: [
    CommonModule,
    TiposDeAtividadeRoutingModule,
  ]
})
export class TiposDeAtividadeModule { }
