import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSmartModalModule } from 'ngx-smart-modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MapaDeColetasComponent } from './mapa-de-coletas/mapa-de-coletas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ColetasAgendadasComponent } from './coletas-agendadas/coletas-agendadas.component';
import { HistoricoDeColetasComponent } from './historico-de-coletas/historico-de-coletas.component';
import { MinimapaDeColetasComponent } from './minimapa-de-coletas/minimapa-de-coletas.component';
import { DesempenhoSemanalComponent } from './desempenho-semanal/desempenho-semanal.component';
import { HistoricoDesempenhoComponent } from './historico-desempenho/historico-desempenho.component';
import { PopupColetasComponent } from './popup-coletas/popup-coletas.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    NavbarComponent,
    FooterComponent,
    MapaDeColetasComponent,
    PerfilComponent,
    ColetasAgendadasComponent,
    HistoricoDeColetasComponent,
    MinimapaDeColetasComponent,
    DesempenhoSemanalComponent,
    HistoricoDesempenhoComponent,
    PopupColetasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSmartModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
