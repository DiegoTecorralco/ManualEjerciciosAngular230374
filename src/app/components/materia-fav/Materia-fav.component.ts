import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-Materia-fav',
  standalone: true,
  imports: [
    CommonModule, // Necesario para *ngFor y otras directivas comunes
    MatTableModule, // Módulo para la tabla
    MatPaginatorModule, // Módulo para la paginación
    MatSortModule, // Módulo para el ordenamiento
    MatFormFieldModule, // Módulo para el campo de búsqueda
    MatInputModule // Módulo para el input
  ],
  templateUrl: './Materia-fav.component.html',
  styleUrls: ['./Materia-fav.component.css']
})
export class MateriaFavComponent implements OnInit {
  // Datos de la tabla
  dataSource: MatTableDataSource<any>;

  // Columnas a mostrar
  displayedColumns: string[] = ['id', 'nombre', 'Materia'];

  // Referencia al paginador y ordenador
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // Datos en formato JSON
  datos = [
    { id: 1, nombre: 'Ramirez Hernandez Marco Antonio', Materia: 'Base de datos' },
    { id: 220773, nombre: 'Artiaga Quiroga Ailton', Materia: 'Base de datos' },
    { id: 230693, nombre: 'Balderas Gomez Dulce', Materia: 'Base de datos' },
    { id: 220397, nombre: 'Bravo Godinez Daniel De Jesus', Materia: 'Base de datos' },
    { id: 230496, nombre: 'Cabrera Velazquez Edgar', Materia: 'Negro' },
    { id: 220076, nombre: 'Estrada Jimenez Jesus Antonio', Materia: 'Base de datos' },
    { id: 230413, nombre: 'Flores Campos Osvaldo Abishai', Materia: 'Base de datos' },
    { id: 230315, nombre: 'Fosado Escudero Carlos Isac', Materia: 'Negro' },
    { id: 230598, nombre: 'Galindo Gonzales Lorena Citlalli', Materia: 'Azul' },
    { id: 230297, nombre: 'Gonzales Peralta Esther', Materia: 'Base de datos' },
    { id: 230350, nombre: 'Guzman Barrera Abril', Materia: 'Base de datos' },
    { id: 230369, nombre: 'Ibarra Salgado Tania', Materia: 'Amarillo' },
    { id: 230365, nombre: 'Jimenez Castillo Jose Agustin', Materia: 'Base de datos' },
    { id: 230353, nombre: 'Brandon Leon Cabrera', Materia: 'Negro' },
    { id: 230415, nombre: 'Lopez Neri Ana Daniela', Materia: 'Base de datos' },
    { id: 230166, nombre: 'Martinez Otero Josue Atlai', Materia: 'Naranja' },
    { id: 230768, nombre: 'Medina Torres Uriel Abdalah', Materia: 'Base de datos' },
    { id: 230308, nombre: 'Mendoza Marquez Brian Jesus', Materia: 'Azul Cielo' },
    { id: 230570, nombre: 'Negrete Hernandez Karen Lizbeth', Materia: 'Base de datos' },
    { id: 230642, nombre: 'Ocpaco Dolores Antonio', Materia: 'Vino' },
    { id: 230410, nombre: 'Ramirez Reyes Jonathan Baldemar', Materia: 'Negro' },
    { id: 230733, nombre: 'Rios Duran Marcos Jesus', Materia: 'Azul' },
    { id: 230809, nombre: 'Rodriguez Peres Christian Paul', Materia: 'Base de datos' },
    { id: 230190, nombre: 'Romero Martinez Yared Amaury', Materia: 'Negro' },
    { id: 230499, nombre: 'Rufino Mendoza Angel De Jesus', Materia: 'Base de datos' },
    { id: 230374, nombre: 'Tecorralco Martinez Diego Salvador', Materia: 'Negro' },
    { id: 230574, nombre: 'Vargas Galindo Guadalupe Idai', Materia: 'Base de datos' },
    { id: 230196, nombre: 'Viveros Martinez Juvenal', Materia: 'Base de datos' },
    { id: 230852, nombre: 'Zacatenco Pedroza Zyanya Ahuachtli', Materia: 'Base de datos' }
  ];

  constructor() {
    // Inicializar el dataSource con los datos
    this.dataSource = new MatTableDataSource(this.datos);
  }

  ngOnInit(): void {
    // Asignar el paginador y el ordenador después de que la vista se haya inicializado
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  // Función para aplicar el filtro de búsqueda
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}