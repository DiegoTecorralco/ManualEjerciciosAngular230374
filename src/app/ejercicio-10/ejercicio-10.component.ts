import { Component } from '@angular/core';
import { CommentsComponent } from '../components/comments/comments.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio-10',
  imports: [CommentsComponent,CommonModule, FormsModule],
  templateUrl: './ejercicio-10.component.html',
  styleUrl: './ejercicio-10.component.css'
})
export class Ejercicio10Component {

}
