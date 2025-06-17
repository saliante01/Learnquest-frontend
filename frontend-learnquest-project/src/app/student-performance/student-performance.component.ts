import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentLevelCardComponent } from "./student-level-card/student-level-card.component";
import { AlumnoItem } from '../performance-student-page/alumno-item.interface';
import { AlumnoDashboard } from '../performance-student-page/alumno-dashboard.interface';
import { AlumnosService } from '../services/alumnos-service';

@Component({
  selector: 'app-student-performance',
  standalone: true,
  imports: [CommonModule, StudentLevelCardComponent],
  templateUrl: './student-performance.component.html',
  styleUrls: ['./student-performance.component.css']
})

export class StudentPerformanceComponent {
  @Input() alumnos: AlumnoItem[] = [];
  estudianteSeleccionado: AlumnoDashboard = null!;
  paginaActual = 0;
  nivelesPorPagina = 4;

  constructor(
    private alumnosService: AlumnosService
  ) {}

  ngOnInit(): void {
    this.getDashboardEnBaseId(this.alumnos[0].idAlumno)
  }

  seleccionarEstudiante(estudiante: AlumnoItem) {
    this.getDashboardEnBaseId(estudiante.idAlumno);
    this.paginaActual = 0;
  }

  getDashboardEnBaseId(alumnoId: number) {
    this.alumnosService.getAlumnoDashboard(alumnoId).subscribe({
      next: (data) => this.estudianteSeleccionado = data,
      error: (err) => console.error('Error al obtener los datos del alumno', err)
    });
  }

  getConicGradient(porcentaje: number): string {
    return `conic-gradient(#ff8000 ${porcentaje}%, #ffffff ${porcentaje}%)`;
  }

  getNivelActual(estudiante: any): number | null {
    const noCompletado = estudiante.niveles.find((n: any) => n.estado !== 'Completado');
    return noCompletado ? noCompletado.nivel : null;
  }

  formatearFecha(fechaISO: string): string {
    const opciones: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    };
    return new Date(fechaISO).toLocaleDateString('es-CL', opciones);
  }

  nivelesPaginados() {
    const inicio = this.paginaActual * this.nivelesPorPagina;
    return this.estudianteSeleccionado.avancePorNiveles.slice(inicio, inicio + this.nivelesPorPagina);
  }

  totalPaginas(): number {
    return Math.ceil(this.estudianteSeleccionado.avancePorNiveles.length / this.nivelesPorPagina);
  }

  paginaSiguiente() {
    if (this.paginaActual < this.totalPaginas() - 1) {
      this.paginaActual++;
    }
  }

  paginaAnterior() {
    if (this.paginaActual > 0) {
      this.paginaActual--;
    }
  }

}
