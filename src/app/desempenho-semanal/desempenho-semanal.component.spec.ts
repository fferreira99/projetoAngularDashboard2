import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesempenhoSemanalComponent } from './desempenho-semanal.component';

describe('DesempenhoSemanalComponent', () => {
  let component: DesempenhoSemanalComponent;
  let fixture: ComponentFixture<DesempenhoSemanalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesempenhoSemanalComponent]
    });
    fixture = TestBed.createComponent(DesempenhoSemanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
