import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-Enfermedades',
  imports: [
      MatTableModule,MatPaginator,MatFormField,MatLabel,CommonModule,MatInputModule
  ],
  templateUrl: './Enfermedades.component.html',
  styleUrl: './Enfermedades.component.css'
})
export class EnfermedadesComponent {
  // Datos de la tabla
  dataSource: MatTableDataSource<any>;

  // Columnas a mostrar
  displayedColumns: string[] = ['numero', 'nombre', 'tipo', 'enlace'];

  // Referencia al paginador y ordenador
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // Datos en formato JSON
  pokemons = [
    { numero: '001', nombre: 'Bulbasaur', tipo: 'Planta/Veneno', enlace: 'https://www.pokemon.com/es/pokedex/bulbasaur' },
    { numero: '002', nombre: 'Ivysaur', tipo: 'Planta/Veneno', enlace: 'https://www.pokemon.com/es/pokedex/ivysaur' },
    { numero: '003', nombre: 'Venusaur', tipo: 'Planta/Veneno', enlace: 'https://www.pokemon.com/es/pokedex/venusaur' },
    { numero: '004', nombre: 'Charmander', tipo: 'Fuego', enlace: 'https://www.pokemon.com/es/pokedex/charmander' },
    { numero: '005', nombre: 'Charmeleon', tipo: 'Fuego', enlace: 'https://www.pokemon.com/es/pokedex/charmeleon' },
    { numero: '006', nombre: 'Charizard', tipo: 'Fuego/Volador', enlace: 'https://www.pokemon.com/es/pokedex/charizard' },
    { numero: '007', nombre: 'Squirtle', tipo: 'Agua', enlace: 'https://www.pokemon.com/es/pokedex/squirtle' },
    { numero: '008', nombre: 'Wartortle', tipo: 'Agua', enlace: 'https://www.pokemon.com/es/pokedex/wartortle' },
    { numero: '009', nombre: 'Blastoise', tipo: 'Agua', enlace: 'https://www.pokemon.com/es/pokedex/blastoise' },
    { numero: '010', nombre: 'Caterpie', tipo: 'Bicho', enlace: 'https://www.pokemon.com/es/pokedex/caterpie' },
    { numero: '011', nombre: 'Metapod', tipo: 'Bicho', enlace: 'https://www.pokemon.com/es/pokedex/metapod' },
    { numero: '012', nombre: 'Butterfree', tipo: 'Bicho/Volador', enlace: 'https://www.pokemon.com/es/pokedex/butterfree' },
    { numero: '013', nombre: 'Weedle', tipo: 'Bicho/Veneno', enlace: 'https://www.pokemon.com/es/pokedex/weedle' },
    { numero: '014', nombre: 'Kakuna', tipo: 'Bicho/Veneno', enlace: 'https://www.pokemon.com/es/pokedex/kakuna' },
    { numero: '015', nombre: 'Beedrill', tipo: 'Bicho/Veneno', enlace: 'https://www.pokemon.com/es/pokedex/beedrill' },
    { numero: '016', nombre: 'Pidgey', tipo: 'Normal/Volador', enlace: 'https://www.pokemon.com/es/pokedex/pidgey' },
    { numero: '017', nombre: 'Pidgeotto', tipo: 'Normal/Volador', enlace: 'https://www.pokemon.com/es/pokedex/pidgeotto' },
    { numero: '018', nombre: 'Pidgeot', tipo: 'Normal/Volador', enlace: 'https://www.pokemon.com/es/pokedex/pidgeot' },
    { numero: '019', nombre: 'Rattata', tipo: 'Normal', enlace: 'https://www.pokemon.com/es/pokedex/rattata' },
    { numero: '020', nombre: 'Raticate', tipo: 'Normal', enlace: 'https://www.pokemon.com/es/pokedex/raticate' },
    { numero: '021', nombre: 'Spearow', tipo: 'Normal/Volador', enlace: 'https://www.pokemon.com/es/pokedex/spearow' },
    { numero: '022', nombre: 'Fearow', tipo: 'Normal/Volador', enlace: 'https://www.pokemon.com/es/pokedex/fearow' },
    { numero: '023', nombre: 'Ekans', tipo: 'Veneno', enlace: 'https://www.pokemon.com/es/pokedex/ekans' },
    { numero: '024', nombre: 'Arbok', tipo: 'Veneno', enlace: 'https://www.pokemon.com/es/pokedex/arbok' },
    { numero: '025', nombre: 'Pikachu', tipo: 'Eléctrico', enlace: 'https://www.pokemon.com/es/pokedex/pikachu' },
    { numero: '026', nombre: 'Raichu', tipo: 'Eléctrico', enlace: 'https://www.pokemon.com/es/pokedex/raichu' },
    { numero: '027', nombre: 'Sandshrew', tipo: 'Tierra', enlace: 'https://www.pokemon.com/es/pokedex/sandshrew' },
    { numero: '028', nombre: 'Sandslash', tipo: 'Tierra', enlace: 'https://www.pokemon.com/es/pokedex/sandslash' },
    { numero: '029', nombre: 'Nidoran♀', tipo: 'Veneno', enlace: 'https://www.pokemon.com/es/pokedex/nidoran-f' },
    { numero: '030', nombre: 'Nidorina', tipo: 'Veneno', enlace: 'https://www.pokemon.com/es/pokedex/nidorina' },
    { numero: '031', nombre: 'Nidoqueen', tipo: 'Veneno/Tierra', enlace: 'https://www.pokemon.com/es/pokedex/nidoqueen' },
    { numero: '032', nombre: 'Nidoran♂', tipo: 'Veneno', enlace: 'https://www.pokemon.com/es/pokedex/nidoran-m' },
    { numero: '033', nombre: 'Nidorino', tipo: 'Veneno', enlace: 'https://www.pokemon.com/es/pokedex/nidorino' },
    { numero: '034', nombre: 'Nidoking', tipo: 'Veneno/Tierra', enlace: 'https://www.pokemon.com/es/pokedex/nidoking' },
    { numero: '035', nombre: 'Clefairy', tipo: 'Hada', enlace: 'https://www.pokemon.com/es/pokedex/clefairy' }
  ];

  constructor() {
    // Inicializar el dataSource con los datos
    this.dataSource = new MatTableDataSource(this.pokemons);
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
