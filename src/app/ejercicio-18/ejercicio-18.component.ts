import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejercicio-18',
  imports: [ReactiveFormsModule],
  templateUrl: './ejercicio-18.component.html',
  styleUrl: './ejercicio-18.component.css'
})
export class Ejercicio18Component {
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
}
