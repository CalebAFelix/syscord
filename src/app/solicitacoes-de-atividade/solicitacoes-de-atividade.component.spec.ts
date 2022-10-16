import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacoesDeAtividadeComponent } from './solicitacoes-de-atividade.component';

describe('SolicitacoesDeAtividadeComponent', () => {
  let component: SolicitacoesDeAtividadeComponent;
  let fixture: ComponentFixture<SolicitacoesDeAtividadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitacoesDeAtividadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitacoesDeAtividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
