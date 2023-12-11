import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-historico-de-coletas',
  templateUrl: './historico-de-coletas.component.html',
  styleUrls: ['./historico-de-coletas.component.css']
})
export class HistoricoDeColetasComponent {
  popupAberto = false;

  abrirPopup() {
    this.popupAberto = true;
  }

  fecharPopupEvent: EventEmitter<void> = new EventEmitter<void>(); 
  fecharPopup() {
    this.fecharPopupEvent.emit();
  }

}
