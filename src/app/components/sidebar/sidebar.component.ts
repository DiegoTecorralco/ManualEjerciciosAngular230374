import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

interface MenuItem {
  text: string;
  icon: string;
  route?: string;
  children?: MenuItem[];
  expanded?: boolean;
  extraDetails?: string;
  description?: string;
  showDescription?: boolean;
  showUnitName?: boolean;
  showExerciseName?: boolean;
  unitName?: string;
  exerciseName?: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule, MatListModule, MatExpansionModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  @Input() sidebarVisible: boolean = true;

  menuItems: MenuItem[] = [
    {
      text: 'Ejercicios',
      icon: 'school',
      expanded: false,
      children: [
        { text: 'Ejercicio 1', icon: 'chevron_right', route: '/ejercicio-1', description: 'Componentes en Angular', showDescription: false, extraDetails: 'Introducción a los componentes, su estructura y ciclo de vida. Aprende a crearlos, organizarlos y reutilizarlos para aplicaciones modulares.', showUnitName: false, showExerciseName: false, unitName: 'Unidad 1', exerciseName: 'Ejercicio Angular' },
        { text: 'Ejercicio 2', icon: 'chevron_right', route: '/ejercicio-2', description: 'Actualizacion de la clase componente', showDescription: false, extraDetails: ' Modificación de propiedades y métodos en un componente para reflejar cambios en la lógica y datos de la aplicación.', showUnitName: false, showExerciseName: false, unitName: 'Unidad 1', exerciseName: 'Ejercicio Angular' },
        { text: 'Ejercicio 3', icon: 'chevron_right', route: '/ejercicio-3', description: 'Componentes', showDescription: false, extraDetails: 'Explicación básica sobre los componentes en Angular y su papel en la arquitectura de una aplicación.', showUnitName: false, showExerciseName: false, unitName: 'Unidad 1', exerciseName: 'Ejercicio Angular' },
        { text: 'Ejercicio 4', icon: 'chevron_right', route: '/ejercicio-4', description: 'Flujo de control en componentes - @if', showDescription: false, extraDetails: 'Uso de @if para controlar la renderización de elementos según condiciones específicas.', showUnitName: false, showExerciseName: false, unitName: 'Unidad 1', exerciseName: 'Ejercicio Angular' },
        { text: 'Ejercicio 5', icon: 'chevron_right', route: '/ejercicio-5', description: 'Flujo de control en componentes - @for', showDescription: false, extraDetails: 'Aplicación de @for para iterar sobre listas y generar elementos dinámicamente en la vista.', showUnitName: false, showExerciseName: false, unitName: 'Unidad 1', exerciseName: 'Ejercicio Angular' },
        { text: 'Ejercicio 6', icon: 'chevron_right', route: '/ejercicio-6', description: 'Vinculación de propiedades en Angular.', showDescription: false, extraDetails: 'Aplicación de la vinculación de propiedades (property binding) para conectar elementos del DOM con la lógica del componente.', showUnitName: false, showExerciseName: false, unitName: 'Unidad 1', exerciseName: 'Ejercicio Angular'},
        { text: 'Ejercicio 7', icon: 'chevron_right', route: '/ejercicio-7', description: 'Gestión de eventos.', showDescription: false, extraDetails: 'Gestión de eventos en Angular, permitiendo la interacción del usuario mediante eventos como clics, teclas y formularios.', showUnitName: false, showExerciseName: false, unitName: 'Unidad 1', exerciseName: 'Ejercicio Angular'},
        { text: 'Ejercicio 8', icon: 'chevron_right', route: '/ejercicio-8', description: 'Componente Comunicación con @Input.', showDescription: false, extraDetails: 'Comunicación entre componentes utilizando la propiedad @Input para pasar datos de un componente padre a un hijo.', showUnitName: false, showExerciseName: false, unitName: 'Unidad 1', exerciseName: 'Ejercicio Angular' },
        { text: 'Ejercicio 9', icon: 'chevron_right', route: '/ejercicio-9', description: 'Comunicación de componentes con @Output.', showDescription: false, extraDetails: 'Uso de @Output y EventEmitter para permitir que un componente hijo envíe información de vuelta a su componente padre.', showUnitName: false, showExerciseName: false, unitName: 'Unidad 1', exerciseName: 'Ejercicio Angular' },
        { text: 'Ejercicio 10', icon: 'chevron_right', route: '/ejercicio-10', description: 'Vistas aplazables.', showDescription: false, extraDetails: 'Implementación de vistas aplazables (lazy loading) para optimizar la carga de módulos y mejorar el rendimiento de la aplicación.', showUnitName: false, showExerciseName: false, unitName: 'Unidad 1', exerciseName: 'Ejercicio Angular' },
        { text: 'Ejercicio 11', icon: 'chevron_right', route: '/ejercicio-11', description: 'Optimización de imágenes.', showDescription: false, extraDetails: 'Estrategias para optimizar imágenes en Angular, reduciendo el tiempo de carga y mejorando la experiencia del usuario.', showUnitName: false, showExerciseName: false, unitName: 'Unidad 1', exerciseName: 'Ejercicio Angular' },
        { text: 'Ejercicio 12', icon: 'chevron_right', route: '/ejercicio-12', description: 'Resumen de rutas.', showDescription: false, extraDetails: 'Resumen sobre el uso y configuración de rutas en Angular, incluyendo navegación entre componentes y parámetros de ruta.', showUnitName: false, showExerciseName: false, unitName: 'Unidad 1', exerciseName: 'Ejercicio Angular' },
        { text: 'Ejercicio 13', icon: 'chevron_right', route: '/ejercicio-13', description: 'Definir una ruta.', showDescription: false, extraDetails: ' Creación y definición de rutas en Angular para estructurar la navegación dentro de la aplicación.', showUnitName: false, showExerciseName: false, unitName: 'Unidad 1', exerciseName: 'Ejercicio Angular' },
        { text: 'Ejercicio 14', icon: 'chevron_right', route: '/ejercicio-14', description: 'Utilizar RouterLink para la navegación.', showDescription: false, extraDetails: 'Uso de RouterLink para enlazar componentes y facilitar la navegación dentro de una aplicación Angular.', showUnitName: false, showExerciseName: false, unitName: 'Unidad 1', exerciseName: 'Ejercicio Angular' },
        { text: 'Ejercicio 15', icon: 'chevron_right', route: '/ejercicio-15', description: 'Resumen de formularios.', showDescription: false, extraDetails: 'Resumen de los diferentes enfoques para trabajar con formularios en Angular, tanto plantillas como formularios reactivos.', showUnitName: false, showExerciseName: false, unitName: 'Unidad 1', exerciseName: 'Ejercicio Angular' },
        { text: 'Ejercicio 16', icon: 'chevron_right', route: '/ejercicio-16', description: 'Obtener el valor de un control de formulario.', showDescription: false, extraDetails: 'Obtención y manipulación de valores de los controles de formulario en Angular para gestionar la entrada del usuario.', showUnitName: false, showExerciseName: false, unitName: 'Unidad 1', exerciseName: 'Ejercicio Angular' },
        { text: 'Ejercicio 17', icon: 'chevron_right', route: '/ejercicio-17', description: 'Formularios reactivos.', showDescription: false, extraDetails: ' Introducción a los formularios reactivos en Angular, permitiendo un manejo más estructurado y dinámico de los datos del usuario.', showUnitName: false, showExerciseName: false, unitName: 'Unidad 1', exerciseName: 'Ejercicio Angular' },
        { text: 'Ejercicio 18', icon: 'chevron_right', route: '/ejercicio-18', description: 'Validación de formularios.', showDescription: false, extraDetails: 'Implementación de validaciones en formularios de Angular para mejorar la experiencia y asegurar la integridad de los datos ingresados.', showUnitName: false, showExerciseName: false, unitName: 'Unidad 1', exerciseName: 'Ejercicio Angular' },
        { text: 'Ejercicio 19', icon: 'chevron_right', route: '/ejercicio-19', description: 'Creación de un servicio inyectable.', showDescription: false, extraDetails: 'Creación y uso de servicios inyectables en Angular para compartir lógica y datos entre diferentes componentes.', showUnitName: false, showExerciseName: false, unitName: 'Unidad 1', exerciseName: 'Ejercicio Angular' },
        { text: 'Ejercicio 20', icon: 'chevron_right', route: '/ejercicio-20', description: 'Inyección de dependencias basada en inyecciones.', showDescription: false, extraDetails: ' Inyección de dependencias basada en inyecciones, una técnica para administrar instancias de servicios dentro de Angular.', showUnitName: false, showExerciseName: false, unitName: 'Unidad 1', exerciseName: 'Ejercicio Angular' },
        { text: 'Ejercicio 21', icon: 'chevron_right', route: '/ejercicio-21', description: 'Inyección de dependencias basada en constructores', showDescription: false, extraDetails: ' Implementación de la inyección de dependencias a través de constructores, asegurando una gestión eficiente de los servicios en Angular.', showUnitName: false, showExerciseName: false, unitName: 'Unidad 1', exerciseName: 'Ejercicio Angular' },

      ]
    },
    {
      text: 'Tablas',
      icon: 'tables',
      expanded: false,
      children: [
        { text: 'Materia Favorito', icon: 'Materia Favorito', route: '/color', description: 'Tabla donde se muestran las materias favoritas del grupo 5B', showDescription: false, extraDetails: 'Materias favoritas de cada uno de mis compañeros en tablas que contengan paginacion', showUnitName: false, showExerciseName: false, unitName: 'Unidad 2', exerciseName: 'Tabla de Libros Favoritos' },
        { text: 'Enfermedades del corazon', icon: 'games', route: '/poke', description: 'Tabla donde se muestran las enfermedades del corazon', showDescription: false, extraDetails: 'Tabla de la bd Video Games Sales en tablas que contengan paginacion', showUnitName: false, showExerciseName: false, unitName: 'Unidad 2', exerciseName: 'Tabla de los Videojuegos' },
      ]
    },
    {
      text: 'Graficas',
      icon: 'tables',
      expanded: false,
      children:[
        {text: 'Grafica Basica', icon:'games', route:'/grafica',description: 'Grafica basica', showDescription: false, showUnitName: false, showExerciseName: false,extraDetails: 'Grafica basica hecha con Amcharts', unitName: 'Unidad 1', exerciseName: 'Grafica con Amcharts'},
        {text: 'Grafica Nueva', icon:'games', route:'/graficaNueva',description: 'Grafica Nueva', showDescription: false, showUnitName: false, showExerciseName: false,extraDetails: 'Grafica Nueva hecha con Amcharts', unitName: 'Unidad 1', exerciseName: 'Grafica con Amcharts'}

      ]
    }
  ];

  activeRoute: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeRoute = event.urlAfterRedirects;
        this.menuItems.forEach(item => {
          if (item.children) {
            item.expanded = item.children.some(child =>
              this.activeRoute.startsWith(child.route || '')
            );
          }
        });
      }
    });
  }

  toggleDescription(item: MenuItem) {
  if (item) {
    item.showDescription = !item.showDescription;

    if (item.route) {
      this.router.navigate([item.route]);
    }
  }
}

  // Verificar si un ítem está activo
  isActive(route: string): boolean {
    return this.activeRoute === route;
  }
}
