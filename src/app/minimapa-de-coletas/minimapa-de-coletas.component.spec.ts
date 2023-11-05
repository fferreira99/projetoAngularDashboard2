import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimapaDeColetasComponent } from './minimapa-de-coletas.component';

describe('MinimapaDeColetasComponent', () => {
  let component: MinimapaDeColetasComponent;
  let fixture: ComponentFixture<MinimapaDeColetasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinimapaDeColetasComponent]
    });
    fixture = TestBed.createComponent(MinimapaDeColetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
