import { Component } from '@angular/core';

@Component({
  selector: 'app-mapeo',
  standalone: true,
  imports: [],
  templateUrl: './mapeo.component.html',
  styleUrl: './mapeo.component.scss'
})
export class MapeoComponent {
  obtenerCoordenadas(event: MouseEvent): void {
    const coordenadasX = event.offsetX; // Coordenada X relativa a la imagen
    const coordenadasY = event.offsetY; // Coordenada Y relativa a la imagen
    console.log(`Coordenadas: X = ${coordenadasX}, Y = ${coordenadasY}`);
  }

}
