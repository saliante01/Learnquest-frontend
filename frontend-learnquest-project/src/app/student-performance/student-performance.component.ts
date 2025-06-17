import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-performance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-performance.component.html',
  styleUrls: ['./student-performance.component.css']
})
export class StudentPerformanceComponent {
  estudiantes = [
    {
      nombre: 'Juan Perez',
      curso: '3A',
      ultimaConexion: '2025-06-23',
      niveles: [
        { nivel: 1, rendimiento: 100, estado: 'Completado',contenido:'Speaking'},
        { nivel: 2, rendimiento: 50, estado: 'Completado' , contenido: 'Listening'},
        { nivel: 3, rendimiento: 0, estado: 'No completado', contenido: 'Writing'},
        { nivel: 4, rendimiento: 0, estado: 'No completado' , contenido: 'Reading'},
        { nivel : 5, rendimiento: 0, estado: 'No completado', contenido: 'Readking'}
      ]
    },
    {
      nombre: 'María González',
      ultimaConexion: '2025-05-25',
      niveles: [
        { nivel: 1, rendimiento: 100, estado: 'Completado',contenido:'Speaking' },
        { nivel: 2, rendimiento: 80, estado: 'Completado',contenido:'Listening'},
        { nivel: 3, rendimiento: 20, estado: 'Completado',contenido:'Writing' },
        { nivel: 4, rendimiento: 0, estado: 'No completado',contenido:'Reading' }
      ]
    },
    {
      nombre: 'Carlos Ruiz',
      ultimaConexion: '2025-04-23',
      niveles: [
        { nivel: 1, rendimiento: 60, estado: 'Completado',contenido:'Speaking' },
        { nivel: 2, rendimiento: 0, estado: 'No completado',contenido:'Listening' },
        { nivel: 3, rendimiento: 0, estado: 'No completado',contenido:'Writing' },
        { nivel: 4, rendimiento: 0, estado: 'No completado',contenido:'Reading' }
      ]
    },
    {
      nombre: 'Ana Torres',
      ultimaConexion: '2025-06-01',
      niveles: [
        { nivel: 1, rendimiento: 100, estado: 'Completado',contenido:'Speaking' },
        { nivel: 2, rendimiento: 100, estado: 'Completado',contenido:'Listening' },
        { nivel: 3, rendimiento: 100, estado: 'Completado',contenido:'Writing' },
        { nivel: 4, rendimiento: 100, estado: 'Completado',contenido:'Reading' }
      ]
    },
    {
      nombre: 'Luis Morales',
      ultimaConexion: '2025-04-10',
      niveles: [
        { nivel: 1, rendimiento: 30, estado: 'Completado',contenido:'Speaking' },
        { nivel: 2, rendimiento: 0, estado: 'No completado',contenido:'Listening' },
        { nivel: 3, rendimiento: 0, estado: 'No completado',contenido:'Writing' },
        { nivel: 4, rendimiento: 0, estado: 'No completado',contenido:'Reading' }
      ]
    },
    {
      nombre: 'Paula Castillo',
      ultimaConexion: '2025-02-23',
      niveles: [
        { nivel: 1, rendimiento: 100, estado: 'Completado',contenido:'Speaking' },
        { nivel: 2, rendimiento: 100, estado: 'Completado',contenido:'Listening' },
        { nivel: 3, rendimiento: 50, estado: 'Completado',contenido:'Writing' },
        { nivel: 4, rendimiento: 10, estado: 'Completado',contenido:'Reading' }
      ]
    },
    {
      nombre: 'Diego Soto',
      ultimaConexion: '2025-06-17',
      niveles: [
        { nivel: 1, rendimiento: 0, estado: 'No completado',contenido:'Speaking' },
        { nivel: 2, rendimiento: 0, estado: 'No completado',contenido:'Listening' },
        { nivel: 3, rendimiento: 0, estado: 'No completado',contenido:'Writing' },
        { nivel: 4, rendimiento: 0, estado: 'No completado',contenido:'Reading' }
      ]
    }
  ];

  
  estudianteSeleccionado = this.estudiantes[0];
  paginaActual = 0;
  nivelesPorPagina = 4;

  seleccionarEstudiante(estudiante: any) {
    this.estudianteSeleccionado = estudiante;
    this.paginaActual = 0;
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
    return this.estudianteSeleccionado.niveles.slice(inicio, inicio + this.nivelesPorPagina);
  }

  totalPaginas(): number {
    return Math.ceil(this.estudianteSeleccionado.niveles.length / this.nivelesPorPagina);
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
