import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome-courses.component.html',
  styleUrls: ['./welcome-courses.component.css']
})
export class WelcomeCoursesComponent {
  courses = [
    { id: 1, name: '3° A', color: '#A5D6A7' },
    { id: 2, name: '3° B', color: '#90CAF9' },
    { id: 3, name: '4° C', color: '#FFF59D' },
    { id: 4, name: '2° D', color: '#FFAB91' },
    { id: 5, name: '5° E', color: '#CE93D8' },
    { id: 6, name: '6° F', color: '#B0BEC5' }
  ];

  constructor(private router: Router) {}

  goToCourse(id: number) {
    this.router.navigate(['/options', id]);
  }
}
