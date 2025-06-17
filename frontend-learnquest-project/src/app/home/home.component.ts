import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { WelcomeCoursesComponent } from "../welcome-courses/welcome-courses.component";
import { CursoDashboard } from '../welcome-courses/curso-dashboard.interface';
import { CursosService } from '../services/cursos-service';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, WelcomeCoursesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  cursos: CursoDashboard[] = [];

  constructor(private cursosService: CursosService) {}

  ngOnInit(): void {
    this.cursosService.getCursosDashboard().subscribe({
      next: (data) => (this.cursos = data),
      error: (err) => console.error('Error al obtener cursos', err)
    });
  }
}
