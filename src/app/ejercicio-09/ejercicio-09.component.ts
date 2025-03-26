import { Component } from '@angular/core';
import { ChildComponent } from '../components/child/child.component';

@Component({
  selector: 'app-ejercicio-09',
  imports: [ChildComponent],
  templateUrl: './ejercicio-09.component.html',
  styleUrl: './ejercicio-09.component.css'
})
export class Ejercicio09Component {
  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }
}
