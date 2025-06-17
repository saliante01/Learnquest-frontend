import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { StudentPerformanceComponent } from "../student-performance/student-performance.component";
import { AlumnosService } from '../services/alumnos-service';
import { AlumnoItem } from './alumno-item.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-performance-student-page',
  imports: [NavbarComponent, StudentPerformanceComponent],
  templateUrl: './performance-student-page.component.html',
  styleUrl: './performance-student-page.component.css'
})
export class PerformanceStudentPageComponent {

  alumnos: AlumnoItem[] = [];

  constructor(private alumnosService: AlumnosService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const cursoId = Number(this.route.snapshot.paramMap.get('id'));

    if (!cursoId) {
      console.error('ID de curso inválido');
      return;
    }

    this.alumnosService.getAlumnosPorCurso(cursoId).subscribe({
      next: (data) => this.alumnos = data,
      error: (err) => console.error('Error al obtener alumnos', err)
    });
  }
}
