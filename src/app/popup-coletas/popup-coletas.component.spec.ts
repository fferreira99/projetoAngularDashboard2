import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupColetasComponent } from './popup-coletas.component';

describe('PopupColetasComponent', () => {
  let component: PopupColetasComponent;
  let fixture: ComponentFixture<PopupColetasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupColetasComponent]
    });
    fixture = TestBed.createComponent(PopupColetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
