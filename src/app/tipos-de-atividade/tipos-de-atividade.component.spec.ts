import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposDeAtividadeComponent } from './tipos-de-atividade.component';

describe('TiposDeAtividadeComponent', () => {
  let component: TiposDeAtividadeComponent;
  let fixture: ComponentFixture<TiposDeAtividadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposDeAtividadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiposDeAtividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
