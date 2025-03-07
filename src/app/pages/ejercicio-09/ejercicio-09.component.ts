import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio-09',
  standalone: true,
  templateUrl: './ejercicio-09.component.html',
  styleUrls: ['./ejercicio-09.component.css']
})
export class Ejercicio09Component {
  counter: number = 0;  // Contador inicializado a 0

  addItem() {
    this.counter++;  // Incrementa el contador al hacer clic en el botón
  }
}
