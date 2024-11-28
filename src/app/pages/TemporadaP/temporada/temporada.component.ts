import { Component } from '@angular/core';

import { MapeoComponent } from '../mapeo/mapeo.component';


@Component({
  selector: 'app-temporada',
  standalone: true,
  imports: [MapeoComponent],
  templateUrl: './temporada.component.html',
  styleUrl: './temporada.component.scss'
})
export class TemporadaComponent {

}
