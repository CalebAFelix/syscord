import { TestBed } from '@angular/core/testing';

import { TiposDeAtividadeService } from './tipos-de-atividade.service';

describe('TiposDeAtividadeService', () => {
  let service: TiposDeAtividadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiposDeAtividadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
