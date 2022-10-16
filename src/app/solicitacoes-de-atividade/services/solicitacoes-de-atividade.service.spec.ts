import { TestBed } from '@angular/core/testing';

import { SolicitacoesDeAtividadeService } from './solicitacoes-de-atividade.service';

describe('SolicitacoesDeAtividadeService', () => {
  let service: SolicitacoesDeAtividadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitacoesDeAtividadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
