import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColetasAgendadasComponent } from './coletas-agendadas.component';

describe('ColetasAgendadasComponent', () => {
  let component: ColetasAgendadasComponent;
  let fixture: ComponentFixture<ColetasAgendadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColetasAgendadasComponent]
    });
    fixture = TestBed.createComponent(ColetasAgendadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
