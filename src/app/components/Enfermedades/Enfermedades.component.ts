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
  displayedColumns: string[] =  [
    'numero', 'edad', 'sexo', 'cp', 'presion_sanguinea', 'colesterol', 'fbs',
    'restecg', 'frecuencia_maxima', 'exang', 'oldpeak', 'slope', 'ca', 'thal', 'target'
  ];

  // Referencia al paginador y ordenador
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // Datos en formato JSON
  personas = [

    { numero: '001', edad: 52, sexo: 1, cp: 0, presion_sanguinea: 125, colesterol: 212, fbs: 0, restecg: 1, frecuencia_maxima: 168, exang: 0, oldpeak: 1, slope: 2, ca: 2, thal: 3, target: 0 },
    { numero: '002', edad: 53, sexo: 1, cp: 0, presion_sanguinea: 140, colesterol: 203, fbs: 1, restecg: 0, frecuencia_maxima: 155, exang: 1, oldpeak: 3.1, slope: 0, ca: 0, thal: 3, target: 0 },
    { numero: '003', edad: 54, sexo: 1, cp: 0, presion_sanguinea: 145, colesterol: 174, fbs: 0, restecg: 1, frecuencia_maxima: 125, exang: 1, oldpeak: 2.6, slope: 0, ca: 0, thal: 3, target: 0 },    
    { numero: '004', edad: '61', sexo: '1', cp: '0', presion_sanguinea: '148', colesterol: '203', fbs: '0', restecg: '1', frecuencia_maxima: '161', exang: '0', oldpeak: '0', slope: '2', ca: '1', thal: '3', target: '0' },
    { numero: '005', edad: '62', sexo: '0', cp: '0', presion_sanguinea: '138', colesterol: '294', fbs: '1', restecg: '1', frecuencia_maxima: '106', exang: '0', oldpeak: '1.9', slope: '1', ca: '3', thal: '2', target: '0' },
    { numero: '006', edad: '58', sexo: '0', cp: '0', presion_sanguinea: '100', colesterol: '248', fbs: '0', restecg: '0', frecuencia_maxima: '122', exang: '0', oldpeak: '1', slope: '1', ca: '0', thal: '2', target: '1' },
    { numero: '007', edad: '58', sexo: '1', cp: '0', presion_sanguinea: '114', colesterol: '318', fbs: '0', restecg: '2', frecuencia_maxima: '140', exang: '0', oldpeak: '4.4', slope: '0', ca: '3', thal: '1', target: '0' },
    { numero: '008', edad: '55', sexo: '1', cp: '0', presion_sanguinea: '160', colesterol: '289', fbs: '0', restecg: '0', frecuencia_maxima: '145', exang: '1', oldpeak: '0.8', slope: '1', ca: '1', thal: '3', target: '0' },
    { numero: '009', edad: '46', sexo: '1', cp: '0', presion_sanguinea: '120', colesterol: '249', fbs: '0', restecg: '0', frecuencia_maxima: '144', exang: '0', oldpeak: '0.8', slope: '2', ca: '0', thal: '3', target: '0' },
    { numero: '010', edad: '54', sexo: '1', cp: '0', presion_sanguinea: '122', colesterol: '286', fbs: '0', restecg: '0', frecuencia_maxima: '116', exang: '1', oldpeak: '3.2', slope: '1', ca: '2', thal: '2', target: '0' },
    { numero: '011', edad: '71', sexo: '0', cp: '0', presion_sanguinea: '112', colesterol: '149', fbs: '0', restecg: '1', frecuencia_maxima: '125', exang: '0', oldpeak: '1.6', slope: '1', ca: '0', thal: '2', target: '1' },
    { numero: '012', edad: '43', sexo: '0', cp: '0', presion_sanguinea: '132', colesterol: '341', fbs: '1', restecg: '0', frecuencia_maxima: '136', exang: '1', oldpeak: '3', slope: '1', ca: '0', thal: '3', target: '0' },
    { numero: '013', edad: '34', sexo: '0', cp: '1', presion_sanguinea: '118', colesterol: '210', fbs: '0', restecg: '1', frecuencia_maxima: '192', exang: '0', oldpeak: '0.7', slope: '2', ca: '0', thal: '2', target: '1' },
    { numero: '014', edad: '51', sexo: '1', cp: '0', presion_sanguinea: '140', colesterol: '298', fbs: '0', restecg: '1', frecuencia_maxima: '122', exang: '1', oldpeak: '4.2', slope: '1', ca: '3', thal: '3', target: '0' },
    { numero: '015', edad: '52', sexo: '1', cp: '0', presion_sanguinea: '128', colesterol: '204', fbs: '1', restecg: '1', frecuencia_maxima: '156', exang: '1', oldpeak: '1', slope: '1', ca: '0', thal: '0', target: '0' },
    { numero: '016', edad: '34', sexo: '0', cp: '1', presion_sanguinea: '118', colesterol: '210', fbs: '0', restecg: '1', frecuencia_maxima: '192', exang: '0', oldpeak: '0.7', slope: '2', ca: '0', thal: '2', target: '1' },
    { numero: '017', edad: '51', sexo: '0', cp: '2', presion_sanguinea: '140', colesterol: '308', fbs: '0', restecg: '0', frecuencia_maxima: '142', exang: '0', oldpeak: '1.5', slope: '2', ca: '1', thal: '2', target: '1' },
    { numero: '018', edad: '54', sexo: '1', cp: '0', presion_sanguinea: '124', colesterol: '266', fbs: '0', restecg: '0', frecuencia_maxima: '109', exang: '1', oldpeak: '2.2', slope: '1', ca: '1', thal: '3', target: '0' },
    { numero: '019', edad: '50', sexo: '0', cp: '1', presion_sanguinea: '120', colesterol: '244', fbs: '0', restecg: '1', frecuencia_maxima: '162', exang: '0', oldpeak: '1.1', slope: '2', ca: '0', thal: '2', target: '1' },
    { numero: '020', edad: '58', sexo: '1', cp: '2', presion_sanguinea: '140', colesterol: '211', fbs: '1', restecg: '0', frecuencia_maxima: '165', exang: '0', oldpeak: '0', slope: '2', ca: '0', thal: '2', target: '1' },
    { numero: '021', edad: '60', sexo: '1', cp: '2', presion_sanguinea: '140', colesterol: '185', fbs: '0', restecg: '0', frecuencia_maxima: '155', exang: '0', oldpeak: '3', slope: '1', ca: '0', thal: '2', target: '0' },
    { numero: '022', edad: '67', sexo: '0', cp: '0', presion_sanguinea: '106', colesterol: '223', fbs: '0', restecg: '1', frecuencia_maxima: '142', exang: '0', oldpeak: '0.3', slope: '2', ca: '2', thal: '2', target: '1' },
    { numero: '023', edad: '45', sexo: '1', cp: '0', presion_sanguinea: '104', colesterol: '208', fbs: '0', restecg: '0', frecuencia_maxima: '148', exang: '1', oldpeak: '3', slope: '1', ca: '0', thal: '2', target: '1' },
    { numero: '024', edad: '63', sexo: '0', cp: '2', presion_sanguinea: '135', colesterol: '252', fbs: '0', restecg: '0', frecuencia_maxima: '172', exang: '0', oldpeak: '0', slope: '2', ca: '0', thal: '2', target: '1' },
    { numero: '025', edad: '42', sexo: '0', cp: '2', presion_sanguinea: '120', colesterol: '209', fbs: '0', restecg: '1', frecuencia_maxima: '173', exang: '0', oldpeak: '0', slope: '1', ca: '0', thal: '2', target: '1' },
    { numero: '026', edad: '50', sexo: '1', cp: '2', presion_sanguinea: '129', colesterol: '196', fbs: '0', restecg: '1', frecuencia_maxima: '163', exang: '0', oldpeak: '0', slope: '2', ca: '0', thal: '2', target: '1' },
    { numero: '027', edad: '67', sexo: '0', cp: '1', presion_sanguinea: '140', colesterol: '288', fbs: '0', restecg: '0', frecuencia_maxima: '110', exang: '1', oldpeak: '3.5', slope: '1', ca: '2', thal: '3', target: '1' },
    { numero: '028', edad: '51', sexo: '0', cp: '2', presion_sanguinea: '120', colesterol: '214', fbs: '1', restecg: '0', frecuencia_maxima: '148', exang: '0', oldpeak: '2.6', slope: '1', ca: '2', thal: '2', target: '0' },
    { numero: '029', edad: '66', sexo: '1', cp: '1', presion_sanguinea: '148', colesterol: '228', fbs: '0', restecg: '1', frecuencia_maxima: '130', exang: '0', oldpeak: '1.5', slope: '2', ca: '2', thal: '3', target: '0' },
    { numero: '030', edad: '52', sexo: '1', cp: '1', presion_sanguinea: '134', colesterol: '201', fbs: '0', restecg: '1', frecuencia_maxima: '158', exang: '0', oldpeak: '0.8', slope: '2', ca: '1', thal: '2', target: '1' },
    { numero: '031', edad: '52', sexo: '1', cp: '1', presion_sanguinea: '134', colesterol: '201', fbs: '0', restecg: '1', frecuencia_maxima: '158', exang: '0', oldpeak: '0.8', slope: '2', ca: '1', thal: '2', target: '1' },
    { numero: '032', edad: '50', sexo: '1', cp: '2', presion_sanguinea: '140', colesterol: '233', fbs: '0', restecg: '1', frecuencia_maxima: '163', exang: '0', oldpeak: '0.6', slope: '1', ca: '1', thal: '3', target: '0' },
    { numero: '033', edad: '49', sexo: '1', cp: '2', presion_sanguinea: '118', colesterol: '149', fbs: '0', restecg: '0', frecuencia_maxima: '126', exang: '0', oldpeak: '0.8', slope: '2', ca: '3', thal: '2', target: '0' },
    { numero: '034', edad: '46', sexo: '1', cp: '2', presion_sanguinea: '150', colesterol: '231', fbs: '0', restecg: '1', frecuencia_maxima: '147', exang: '0', oldpeak: '3.6', slope: '1', ca: '0', thal: '2', target: '0' },
    { numero: '035', edad: '38', sexo: '1', cp: '2', presion_sanguinea: '138', colesterol: '175', fbs: '0', restecg: '1', frecuencia_maxima: '173', exang: '0', oldpeak: '0', slope: '2', ca: '4', thal: '2', target: '1' },
    { numero: '036', edad: '37', sexo: '0', cp: '2', presion_sanguinea: '120', colesterol: '215', fbs: '0', restecg: '1', frecuencia_maxima: '170', exang: '0', oldpeak: '0', slope: '2', ca: '0', thal: '1', target: '1' },
    { numero: '037', edad: '44', sexo: '1', cp: '1', presion_sanguinea: '120', colesterol: '220', fbs: '0', restecg: '1', frecuencia_maxima: '170', exang: '0', oldpeak: '0', slope: '2', ca: '0', thal: '1', target: '1' },
    { numero: '038', edad: '58', sexo: '1', cp: '2', presion_sanguinea: '140', colesterol: '211', fbs: '1', restecg: '0', frecuencia_maxima: '165', exang: '0', oldpeak: '0', slope: '2', ca: '0', thal: '2', target: '1' },
    { numero: '039', edad: '59', sexo: '0', cp: '0', presion_sanguinea: '174', colesterol: '249', fbs: '0', restecg: '1', frecuencia_maxima: '143', exang: '1', oldpeak: '0', slope: '1', ca: '0', thal: '0', target: '0' },
    { numero: '040', edad: '62', sexo: '0', cp: '0', presion_sanguinea: '140', colesterol: '268', fbs: '0', restecg: '0', frecuencia_maxima: '160', exang: '0', oldpeak: '3.6', slope: '0', ca: '2', thal: '0', target: '1' },
    { numero: '041', edad: '68', sexo: '1', cp: '0', presion_sanguinea: '144', colesterol: '193', fbs: '1', restecg: '1', frecuencia_maxima: '141', exang: '0', oldpeak: '3.4', slope: '1', ca: '2', thal: '3', target: '0' },
    { numero: '042', edad: '54', sexo: '0', cp: '2', presion_sanguinea: '108', colesterol: '267', fbs: '0', restecg: '0', frecuencia_maxima: '167', exang: '0', oldpeak: '0', slope: '2', ca: '0', thal: '1', target: '1' },
    { numero: '043', edad: '62', sexo: '0', cp: '0', presion_sanguinea: '124', colesterol: '209', fbs: '0', restecg: '1', frecuencia_maxima: '163', exang: '0', oldpeak: '0', slope: '2', ca: '0', thal: '1', target: '1' },
    { numero: '044', edad: '63', sexo: '1', cp: '0', presion_sanguinea: '140', colesterol: '187', fbs: '0', restecg: '0', frecuencia_maxima: '144', exang: '1', oldpeak: '4', slope: '2', ca: '0', thal: '2', target: '0' },
    { numero: '045', edad: '44', sexo: '1', cp: '0', presion_sanguinea: '120', colesterol: '169', fbs: '0', restecg: '1', frecuencia_maxima: '144', exang: '1', oldpeak: '2.8', slope: '0', ca: '1', thal: '0', target: '0' },
    { numero: '046', edad: '62', sexo: '1', cp: '1', presion_sanguinea: '128', colesterol: '208', fbs: '1', restecg: '0', frecuencia_maxima: '140', exang: '0', oldpeak: '0', slope: '2', ca: '0', thal: '2', target: '1' },
    { numero: '047', edad: '45', sexo: '0', cp: '0', presion_sanguinea: '138', colesterol: '236', fbs: '0', restecg: '0', frecuencia_maxima: '152', exang: '1', oldpeak: '0.2', slope: '1', ca: '0', thal: '3', target: '1' },
    { numero: '048', edad: '57', sexo: '0', cp: '0', presion_sanguinea: '128', colesterol: '303', fbs: '0', restecg: '0', frecuencia_maxima: '159', exang: '0', oldpeak: '0', slope: '2', ca: '1', thal: '1', target: '1' },
    { numero: '049', edad: '53', sexo: '1', cp: '0', presion_sanguinea: '123', colesterol: '282', fbs: '0', restecg: '1', frecuencia_maxima: '95', exang: '1', oldpeak: '2', slope: '1', ca: '2', thal: '3', target: '0' },
    { numero: '050', edad: '65', sexo: '1', cp: '0', presion_sanguinea: '110', colesterol: '248', fbs: '0', restecg: '0', frecuencia_maxima: '158', exang: '0', oldpeak: '0.6', slope: '2', ca: '2', thal: '1', target: '0' }
  ];

  constructor() {
    // Inicializar el dataSource con los datos
    this.dataSource = new MatTableDataSource(this.personas);
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
