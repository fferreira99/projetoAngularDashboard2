import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MapaDeColetasComponent } from './mapa-de-coletas/mapa-de-coletas.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  {path: 'mapa-de-coletas', component: MapaDeColetasComponent},
  {path: 'perfil', component: PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
