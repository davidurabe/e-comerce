import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CatalogoComponent } from "./catalogo/catalogo.component";
import { BuscadorComponent } from './buscador/buscador.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CatalogoComponent, BuscadorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'e-comerce';
}
