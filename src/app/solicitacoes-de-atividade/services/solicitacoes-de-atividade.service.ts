import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SolicitacaoDeAtividade } from '../types/SolicitacaoDeAtividade';
import { Atividade } from '../types/Atividade';

@Injectable({
  providedIn: 'root'
})
export class SolicitacoesDeAtividadeService {

  constructor(private http: HttpClient) { }

  listByAlunoId(alunoId: number) {
    return this.http.get<SolicitacaoDeAtividade[]>(`${environment.BASE_URL}/alunos/${alunoId}/solicitacoes-de-atividade`);
  }

  listByCursoId(cursoId: number) {
    return this.http.get<SolicitacaoDeAtividade[]>(`${environment.BASE_URL}/cursos/${cursoId}/solicitacoes-de-atividade`);
  }

  create(atividades: Atividade[], alunoId: number){
    return this.http.post(`${environment.BASE_URL}/alunos/${alunoId}/solicitacoes-de-atividade`, {atividades})
  }

  listAtividadesBySolicitacaoId(solicitacaoId: number) {
    return this.http.get<Atividade[]>(`${environment.BASE_URL}/solicitacoes-de-atividade/${solicitacaoId}/atividades`);
  }

}
