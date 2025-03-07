import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageContainerComponent } from "./components/page-container/page-container.component";
import { LoginComponent } from './login/login.component'; // Importar LoginComponent
import { NgOptimizedImage } from '@angular/common'; // Importar NgOptimizedImage

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    NavbarComponent,
    PageContainerComponent,
    LoginComponent, // Incluir LoginComponent
    NgOptimizedImage  // Incluir NgOptimizedImage
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ManualEjercicios_Angular_230374';
  isLoggedIn: boolean = false; // Agregar estado de login
  userName: string = ''; // Agregar nombre de usuario

  ngOnInit() {
    // Check if localStorage is available before accessing it
    if (typeof localStorage !== 'undefined') {
      // Recuperar el estado de login y el nombre de usuario desde localStorage
      const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
      const storedUserName = localStorage.getItem('userName');
      this.isLoggedIn = storedIsLoggedIn === 'true';
      this.userName = storedUserName || '';
    } else {
      console.warn('localStorage is not available');
    }
  }

  onLoginSuccess(name: string) {
    if (typeof localStorage !== 'undefined') {
      this.isLoggedIn = true;
      this.userName = name;
      // Guardar el estado de login y el nombre de usuario en localStorage
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userName', name);
    } else {
      console.warn('localStorage is not available');
    }
  }

  onLogout() {
    if (typeof localStorage !== 'undefined') {
      this.isLoggedIn = false;
      this.userName = '';
      // Limpiar el estado de login y el nombre de usuario en localStorage
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userName');
    } else {
      console.warn('localStorage is not available');
    }
  }
}
