import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDeAtividadeComponent } from './tipo-de-atividade.component';

describe('TipoDeAtividadeComponent', () => {
  let component: TipoDeAtividadeComponent;
  let fixture: ComponentFixture<TipoDeAtividadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoDeAtividadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoDeAtividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
