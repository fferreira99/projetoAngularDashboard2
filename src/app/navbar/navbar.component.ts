import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MapaDeColetasComponent } from '../mapa-de-coletas/mapa-de-coletas.component';
import { PerfilComponent } from '../perfil/perfil.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  @Input() username: string = "Chiquitito";
  @Input() rating: number = 0;

  constructor(private router: Router) { }

  direcionandoMapaDeColetas() {
    this.router.navigate(['/MapaDeColetas']);
  }
  
  direcionandoPerfil() {
    this.router.navigate(['/Perfil']);
  }
}
