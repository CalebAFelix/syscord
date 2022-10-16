import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoDeAtividade } from 'src/app/types/TipoDeAtividade';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TiposDeAtividadeService {

  constructor(private http: HttpClient) { }

  listAllByCursoId(cursoId: number) {
    return this.http.get<TipoDeAtividade[]>(`${environment.BASE_URL}/cursos/${cursoId}/tipos-de-atividade`);
  }
  
}
