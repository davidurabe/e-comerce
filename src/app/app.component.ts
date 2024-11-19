import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CatalogoComponent } from "./catalogo/catalogo.component";
import { BuscadorComponent } from './buscador/buscador.component';
import { TemporadaComponent } from './pages/temporada/temporada.component';
import { HeaderComponent } from "./header/header.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CatalogoComponent, TemporadaComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'e-comerce';
}
