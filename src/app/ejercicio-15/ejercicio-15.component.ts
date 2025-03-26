import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio-15',
  imports: [FormsModule],
  templateUrl: './ejercicio-15.component.html',
  styleUrl: './ejercicio-15.component.css'
})
export class Ejercicio15Component {
  favoriteFramework = 'Angular';
  username = 'Teco';
}
