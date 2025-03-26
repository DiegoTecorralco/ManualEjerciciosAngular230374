import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PageContainerComponent } from './components/page-container/page-container.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatPaginatorModule, MatSortModule, MatTableModule, LoginComponent,CommonModule,FormsModule, MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule, PageContainerComponent/*, Ejercicio01Component, Ejercicio02Component, Ejercicio03Component, Ejercicio04Component, Ejercicio05Component, Ejercicio06Component, Ejercicio07Component, Ejercicio08Component, Ejercicio09Component, Ejercicio10Component, Ejercicio11Component, Ejercicio12Component, Ejercicio13Component*/],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ManualEjerciciosAngular - Teco';


  
  sidebarVisible: boolean = true;


  isLoginPage = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = event.url === '/login';
      }
    });
  }

  logout(): void {
    localStorage.removeItem('token');

    this.router.navigate(['/login']);
  }
  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }
}