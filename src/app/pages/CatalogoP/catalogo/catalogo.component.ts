import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BuscadorComponent } from '../buscador/buscador.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [BuscadorComponent, CommonModule],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss'
})
export class CatalogoComponent {
  private cat?: { [key: string]: boolean };

  categorias: String[] = [
    "calzado",
    "accesorios",
    "ropa"
  ]

  recibirDatos(cat: { [key: string]: boolean }) {
    this.cat = cat;
    this.buscar();
  }

  Lista = [
    { nombre: 'Zapatillas nike', categoria: 'calzado', img: 'zapatillas.jpg' },
    { nombre: 'Zapatillas puma', categoria: 'calzado', img: 'calzado.jpg' },
    { nombre: 'Collar de lapiz azuli', categoria: 'accesorios', img: 'collar.jpg' },
    { nombre: 'La pulserita', categoria: 'accesorios', img: 'pulsera.jpg' },
    { nombre: 'Aritos de gota', categoria: 'accesorios', img: 'aritos.jpg' },
    { nombre: 'Jeans', categoria: 'ropa', img: 'pantalon.jpg' },
    { nombre: 'Pantalon negro', categoria: 'ropa', img: 'pantalon2.jpg' },
    { nombre: 'top marron', categoria: 'ropa', img: 'prenda.jpg' },
    { nombre: 'Gabardina beige', categoria: 'ropa', img: 'prenda2.jpg' },
    { nombre: 'Pulober gris', categoria: 'ropa', img: 'prenda3.jpg' }
  ]

  terminoBusqueda: string = '';

  catalogoLista = this.Lista;
  filtros: { [key: string]: boolean } = {
    ropa: false,
    calzado: false,
    accesorioss: false
  };

  buscar() {
    // Filtra por término de búsqueda
    let filtrados = this.Lista.filter(item =>
      item.nombre.toLowerCase().includes(this.terminoBusqueda.toLowerCase())
    );
    // Filtra por las casillas seleccionadas si hay al menos una seleccionada
    const filtrosSeleccionados = Object.keys(this.cat!).filter(categoria => this.cat![categoria]);
    if (filtrosSeleccionados.length > 0) {
      filtrados = filtrados.filter(item => filtrosSeleccionados.includes(item.categoria));
    }

    this.catalogoLista = filtrados;
  }
}
