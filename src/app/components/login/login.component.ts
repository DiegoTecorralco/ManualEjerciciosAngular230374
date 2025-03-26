import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  login(): void {
    if (this.username === 'teco' && this.password === '12345') {
      localStorage.setItem('username', this.username); // Guardar en localStorage
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Campos Incorrectos';
    }
  }
}
