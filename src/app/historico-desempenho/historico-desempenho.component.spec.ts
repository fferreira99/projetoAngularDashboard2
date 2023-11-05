import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoDesempenhoComponent } from './historico-desempenho.component';

describe('HistoricoDesempenhoComponent', () => {
  let component: HistoricoDesempenhoComponent;
  let fixture: ComponentFixture<HistoricoDesempenhoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoricoDesempenhoComponent]
    });
    fixture = TestBed.createComponent(HistoricoDesempenhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
