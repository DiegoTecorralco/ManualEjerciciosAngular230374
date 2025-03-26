import { Component, inject } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-ejercicio-19',
  imports: [],
  templateUrl: './ejercicio-19.component.html',
  styleUrl: './ejercicio-19.component.css'
})
export class Ejercicio19Component {
  carService = inject(CarService);

}
