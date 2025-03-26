import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio-11',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './ejercicio-11.component.html',
  styleUrl: './ejercicio-11.component.css'
})
export class Ejercicio11Component {
  logoUrl = '/angular.svg';
  logoAlt = 'Angular logo';
  username = 'Teco';
}
