import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentLevelCardComponent } from './student-level-card/student-level-card.component';
import { AlumnoItem } from '../performance-student-page/alumno-item.interface';
import { AlumnoDashboard } from '../performance-student-page/alumno-dashboard.interface';
import { AlumnosService } from '../services/alumnos-service';
import { CursoConAlumnos } from '../performance-student-page/curso-con-alumnos.interface';
import { NivelTarjeta } from '../performance-student-page/nivel-tarjeta.interface';

@Component({
  selector: 'app-student-performance',
  standalone: true,
  imports: [CommonModule, StudentLevelCardComponent],
  templateUrl: './student-performance.component.html',
  styleUrls: ['./student-performance.component.css'],
})
export class StudentPerformanceComponent {
  private _alumnos: AlumnoItem[] = [];
  nombreCurso: string = null!;

  estudianteSeleccionado: AlumnoDashboard = null!;
  paginaActual = 0;
  nivelesPorPagina = 4;

  constructor(private alumnosService: AlumnosService) {}

  @Input() set curso(value: CursoConAlumnos) {
    this._alumnos = value.alumnos;
    this.nombreCurso = value.nombreCurso;
    if (this._alumnos?.length) {
      this.seleccionarEstudiante(this._alumnos[0]);
    }
  }

  get alumnos(): AlumnoItem[] {
    return this._alumnos;
  }

  seleccionarEstudiante(estudiante: AlumnoItem) {
    this.getDashboardEnBaseId(estudiante.idAlumno);
    this.paginaActual = 0;
  }

  getDashboardEnBaseId(alumnoId: number) {
    this.alumnosService.getAlumnoDashboard(alumnoId).subscribe({
      next: (data) => {
        (this.estudianteSeleccionado = data)
      },
      error: (err) =>
        console.error('Error al obtener los datos del alumno', err),
    });
  }

  getConicGradient(porcentaje: number): string {
    return `conic-gradient(#ff8000 ${porcentaje}%, #ffffff ${porcentaje}%)`;
  }

  getNivelActual(estudiante: AlumnoDashboard): string | null {
    const noCompletado = estudiante.avancePorNiveles.find(
      (n: NivelTarjeta) => !n.aprobado
    );
    return noCompletado ? noCompletado.nombreNivel : null;
  }

  formatearFecha(fechaISO: string): string {
    const opciones: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    };
    return new Date(fechaISO).toLocaleDateString('es-CL', opciones);
  }

  nivelesPaginados() {
    const inicio = this.paginaActual * this.nivelesPorPagina;
    return this.estudianteSeleccionado.avancePorNiveles.slice(
      inicio,
      inicio + this.nivelesPorPagina
    );
  }

  totalPaginas(): number {
    return Math.ceil(
      this.estudianteSeleccionado.avancePorNiveles.length /
        this.nivelesPorPagina
    );
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
