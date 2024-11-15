import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [ FormsModule, CommonModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.scss'
})
export class BuscadorComponent {
  terminoBusqueda: string = ''; // Variable para el término de búsqueda
  elementos = [
    { nombre: 'Camisa', categoria: 'ropa' },
    { nombre: 'Zapatos', categoria: 'calzado' },
    { nombre: 'Pantalón', categoria: 'ropa' },
    { nombre: 'Sombrero', categoria: 'accesorios' },
    { nombre: 'Cinturón', categoria: 'accesorios' }
  ]; // Lista de elementos de ejemplo
  resultados = this.elementos; // Mostrar todos al inicio
  filtros: { [key: string]: boolean } = {
    ropa: false,
    calzado: false,
    accesorios: false
  }; // Estados de los filtros

  buscar() {
    // Filtra por término de búsqueda
    let filtrados = this.elementos.filter(item =>
      item.nombre.toLowerCase().includes(this.terminoBusqueda.toLowerCase())
    );

    // Filtra por las casillas seleccionadas si hay al menos una seleccionada
    const filtrosSeleccionados = Object.keys(this.filtros).filter(categoria => this.filtros[categoria]);
    if (filtrosSeleccionados.length > 0) {
      filtrados = filtrados.filter(item => filtrosSeleccionados.includes(item.categoria));
    }

    this.resultados = filtrados;
  }
}
