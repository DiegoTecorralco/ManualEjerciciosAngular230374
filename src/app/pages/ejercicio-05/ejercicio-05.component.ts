import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio-05',
  templateUrl: './ejercicio-05.component.html',
  styleUrls: ['./ejercicio-05.component.css']
})
export class Ejercicio05Component {
  operatingSystems = [
    { id: 'win', name: 'Windows' },
    { id: 'osx', name: 'MacOS' },
    { id: 'lin', name: 'Linux' },
  ];

  users = [
    { id: 0, name: 'Aby' },
    { id: 1, name: 'TECO' },
    { id: 2, name: 'Maty' },
    { id: 3, name: 'Bety' },
    { id: 4, name: 'Gonzalo' },
  ];
}
