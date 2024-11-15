import { Component } from '@angular/core';
import { FormGroup, FormBuilder  } from '@angular/forms';
import { BuscadorComponent } from "../buscador/buscador.component";

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [BuscadorComponent],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss'
})
export class CatalogoComponent {

}
