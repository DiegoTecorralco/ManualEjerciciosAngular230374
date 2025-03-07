// src/app/ejercicio-12/ejercicio-12.component.ts
import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';  // Importamos NgOptimizedImage si es necesario

@Component({
  selector: 'app-ejercicio-12',
  standalone: true,
  imports: [NgOptimizedImage], // Si necesitas importar NgOptimizedImage para imágenes optimizadas
  templateUrl: './ejercicio-12.component.html',
  styleUrls: ['./ejercicio-12.component.css']
})
export class Ejercicio12Component {
  // Lógica de tu componente
}
