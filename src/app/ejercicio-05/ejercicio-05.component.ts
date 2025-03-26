import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio-05',
  imports: [],
  templateUrl: './ejercicio-05.component.html',
  styleUrl: './ejercicio-05.component.css'
})
export class Ejercicio05Component {
  users = [
    {id: 0, name: 'Teco'},
    {id: 1, name: 'Aby'},
    {id: 2, name: 'Maty'},
    {id: 3, name: 'Beatri '},
    {id: 4, name: 'Fernando'},
  ];
}
