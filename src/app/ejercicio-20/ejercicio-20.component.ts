import { Component, inject } from '@angular/core';
import { CarService } from '../car.service';
@Component({
  selector: 'app-ejercicio-20',
  imports: [],
  templateUrl: './ejercicio-20.component.html',
  styleUrl: './ejercicio-20.component.css'
})
export class Ejercicio20Component {
  display = '';
  carService = inject(CarService);

  constructor() {
    this.display = this.carService.getCars().join(' ⭐️ ');
  }
}
