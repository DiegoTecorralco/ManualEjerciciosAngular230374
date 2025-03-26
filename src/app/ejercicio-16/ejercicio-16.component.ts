import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio-16',
  imports: [FormsModule],
  templateUrl: './ejercicio-16.component.html',
  styleUrl: './ejercicio-16.component.css'
})
export class Ejercicio16Component {
  favoriteFramework = 'Angular';
  username = 'Teco';

  showFramework() {
    alert(this.favoriteFramework);
  }
}
