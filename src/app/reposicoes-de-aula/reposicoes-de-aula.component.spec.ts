import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposicoesDeAulaComponent } from './reposicoes-de-aula.component';

describe('ReposicoesDeAulaComponent', () => {
  let component: ReposicoesDeAulaComponent;
  let fixture: ComponentFixture<ReposicoesDeAulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReposicoesDeAulaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposicoesDeAulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
