import { Component } from '@angular/core';

@Component({
  selector: 'app-mapeo',
  standalone: true,
  imports: [],
  templateUrl: './mapeo.component.html',
  styleUrl: './mapeo.component.scss'
})
export class MapeoComponent{

  mostrarInfo(event: MouseEvent, id:string): void{
    event.preventDefault();

    const infos = document.querySelectorAll('.info');
    infos.forEach(info => (info as HTMLElement).style.display = 'none');

    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.style.left = `${event.clientX + 10}px`;
      elemento.style.top = `${event.clientY + 10}px`;
      elemento.style.position = 'absolute';
      elemento.style.display = 'block';
    }


  }
  ocultarInfo(id: string): void {
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.style.display = 'none';
    }
  }

  obtenerCoordenadas(event: MouseEvent): void {
    const coordenadasX = event.offsetX; 
    const coordenadasY = event.offsetY; 
    console.log(`Coordenadas: X = ${coordenadasX}, Y = ${coordenadasY}`);
  }

}
