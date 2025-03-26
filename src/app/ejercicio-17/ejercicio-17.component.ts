import { Component } from '@angular/core';
import {ReactiveFormsModule } from '@angular/forms';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-ejercicio-17',
  imports: [ReactiveFormsModule],
  templateUrl: './ejercicio-17.component.html',
  styleUrl: './ejercicio-17.component.css'
})
export class Ejercicio17Component {
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  handleSubmit() {
    alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
  }
}
