import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
username= 'teco'
email= 'teco@gmail.com'
joinDate= '26/03/2025'
location= 'Xicotepec de Juarez'
bio= 'Soy estudiante de TSU en Desarrollo de Software, apasionada por la tecnología y la programación. Me encanta resolver problemas complejos a través del código y aprender nuevas tecnologías.'
}
