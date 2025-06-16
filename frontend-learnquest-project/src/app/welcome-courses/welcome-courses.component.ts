import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome-courses.component.html',
  styleUrls: ['./welcome-courses.component.css']
})
export class WelcomeCoursesComponent {
  courses = [
    { name: '3° A', color: '#A5D6A7' }, // verde claro
    { name: '3° B', color: '#90CAF9' }, // azul claro
    { name: '4° C', color: '#FFF59D' }, // amarillo claro
    { name: '2° D', color: '#FFAB91' }, // naranjo claro
    { name: '5° E', color: '#CE93D8' }, // lila
    { name: '6° F', color: '#B0BEC5' }  // gris azulado
  ];
}
