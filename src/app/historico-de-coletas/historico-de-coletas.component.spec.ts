import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoDeColetasComponent } from './historico-de-coletas.component';

describe('HistoricoDeColetasComponent', () => {
  let component: HistoricoDeColetasComponent;
  let fixture: ComponentFixture<HistoricoDeColetasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoricoDeColetasComponent]
    });
    fixture = TestBed.createComponent(HistoricoDeColetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
