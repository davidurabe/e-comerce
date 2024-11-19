import { Component } from '@angular/core';
import { OfertasComponent } from "../../ofertas/ofertas.component";
import { MapeoComponent } from "../mapeo/mapeo.component";

@Component({
  selector: 'app-temporada',
  standalone: true,
  imports: [OfertasComponent, MapeoComponent],
  templateUrl: './temporada.component.html',
  styleUrl: './temporada.component.scss'
})
export class TemporadaComponent {

}
