import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MatIconModule } from '@angular/material/icon';

interface Breadcrumb {
  label: string;
  url: string;
  icon?: string;
}

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent {
  breadcrumbs: Breadcrumb[] = [];
  
  // Mapeo de rutas a nombres legibles y íconos
  private routeMapping: { [key: string]: { label: string, icon?: string } } = {
    'home': { label: 'Inicio', icon: 'home' },
    'profile': { label: 'Mi Perfil', icon: 'person' },
    'settings': { label: 'Configuración', icon: 'settings' },
    'ejercicio-1': { label: 'Ejercicio 1', icon: 'school' },
    'ejercicio-2': { label: 'Ejercicio 2', icon: 'school' },
    'ejercicio-3': { label: 'Ejercicio 3', icon: 'school' },
    'ejercicio-4': { label: 'Ejercicio 4', icon: 'school' },
    'ejercicio-5': { label: 'Ejercicio 5', icon: 'school' },
    'ejercicio-6': { label: 'Ejercicio 6', icon: 'school' },
    'ejercicio-7': { label: 'Ejercicio 7', icon: 'school' },
    'ejercicio-8': { label: 'Ejercicio 8', icon: 'school' },
    'ejercicio-9': { label: 'Ejercicio 9', icon: 'school' },
    'ejercicio-10': { label: 'Ejercicio 10', icon: 'school' },
    'ejercicio-11': { label: 'Ejercicio 11', icon: 'school' },
    'ejercicio-12': { label: 'Ejercicio 12', icon: 'school' },
    'ejercicio-13': { label: 'Ejercicio 13', icon: 'school' },
    'tareas': { label: 'Tareas', icon: 'assignment' },
    'examen': { label: 'Examen', icon: 'quiz' },
    'instrucciones': { label: 'Instrucciones', icon: 'info' },
    'practico': { label: 'Realizar Examen', icon: 'edit' },
    'resultados': { label: 'Resultados', icon: 'grading' },
    'about': { label: 'Acerca de', icon: 'info' }
  };

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.createBreadcrumbs();
    });
    
    // Inicializar breadcrumbs con la ruta actual
    this.createBreadcrumbs();
  }

  private createBreadcrumbs() {
    this.breadcrumbs = [];
    
    // Añadir siempre el inicio
    this.breadcrumbs.push({
      label: 'Inicio',
      url: '/home',
      icon: 'home'
    });
    
    // Obtener la URL actual y dividirla en segmentos
    const urlSegments = this.router.url.split('/').filter(segment => segment);
    
    let currentUrl = '';
    
    // Construir breadcrumbs basados en los segmentos de URL
    for (let i = 0; i < urlSegments.length; i++) {
      const segment = urlSegments[i];
      currentUrl += `/${segment}`;
      
      // Buscar el mapeo para este segmento
      const mapping = this.routeMapping[segment];
      
      if (mapping) {
        this.breadcrumbs.push({
          label: mapping.label,
          url: currentUrl,
          icon: mapping.icon
        });
      } else {
        // Si no hay mapeo, usar el segmento como está (capitalizado)
        this.breadcrumbs.push({
          label: segment.charAt(0).toUpperCase() + segment.slice(1),
          url: currentUrl
        });
      }
    }
  }
}
