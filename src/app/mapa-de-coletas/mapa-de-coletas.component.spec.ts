import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaDeColetasComponent } from './mapa-de-coletas.component';

describe('MapaDeColetasComponent', () => {
  let component: MapaDeColetasComponent;
  let fixture: ComponentFixture<MapaDeColetasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapaDeColetasComponent]
    });
    fixture = TestBed.createComponent(MapaDeColetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
