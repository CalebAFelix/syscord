import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { TipoDeAtividade } from 'src/app/types/TipoDeAtividade';

@Injectable({
  providedIn: 'root'
})
export class TiposDeAtividadeService {

  constructor(private http: HttpClient) { }

  listAllByCursoId(cursoId: number) {
    return this.http.get<TipoDeAtividade[]>(`${environment.BASE_URL}/cursos/${cursoId}/tipos-de-atividade`);
  }

}
