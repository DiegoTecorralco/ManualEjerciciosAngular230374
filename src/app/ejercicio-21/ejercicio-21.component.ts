import { Component } from '@angular/core';
import { CarService } from '../car.service';
@Component({
  selector: 'app-ejercicio-21',
  imports: [],
  templateUrl: './ejercicio-21.component.html',
  styleUrl: './ejercicio-21.component.css'
})
export class Ejercicio21Component {
  display = '';

  constructor(private carService: CarService) {
    this.display = this.carService.getCars().join(' 🤟 ');
  }
}
