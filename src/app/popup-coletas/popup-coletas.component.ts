import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-popup-coletas',
  templateUrl: './popup-coletas.component.html',
  styleUrls: ['./popup-coletas.component.css']
})
export class PopupColetasComponent {
  @Output() fechar = new EventEmitter<void>();

  fecharPopup() {
    this.fechar.emit();
  }
}
