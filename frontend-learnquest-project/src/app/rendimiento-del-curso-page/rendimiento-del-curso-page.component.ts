import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltrosRendimientoComponent } from './filtros-rendimiento/filtros-rendimiento.component';
import { TarjetaRendimientoPorEstudianteComponent } from './tarjeta-rendimiento-por-estudiante/tarjeta-rendimiento-por-estudiante.component';
import { Rendimiento } from './filtros-rendimiento/rendimiento.enum';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router, ActivatedRoute } from '@angular/router';
import { AlumnosService } from '../services/alumnos-service';
import { RankingAlumno } from './ranking-alumno.interface';

@Component({
  selector: 'app-rendimiento-del-curso-page',
  standalone: true,
  imports: [
    FiltrosRendimientoComponent,
    TarjetaRendimientoPorEstudianteComponent,
    CommonModule,
    NavbarComponent,
  ],
  templateUrl: './rendimiento-del-curso-page.component.html',
  styleUrl: './rendimiento-del-curso-page.component.css',
})
export class RendimientoDelCursoPageComponent implements OnInit {
  constructor(
    private alumnosService: AlumnosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  idCurso: number = null!;

  rendimientoEnum = Rendimiento;

  rendimientoSeleccionado: Rendimiento = this.rendimientoEnum.Mejores;

  peoresEstudiantes: RankingAlumno[] = [];

  mejoresEstudiantes: RankingAlumno[] = [];

  ngOnInit() {
    const paramId = this.route.snapshot.paramMap.get('id');
    if (paramId) {
      this.idCurso = Number(paramId);
      this.cargarRanking();
    } else {
      console.error('ID de curso inválido');
    }
  }

  cargarRanking() {
    this.alumnosService.getRankingGeneral(this.idCurso).subscribe({
      next: (data) => {
        this.mejoresEstudiantes = data.mejores5;
        this.peoresEstudiantes = data.peores5;
      },
      error: (err) => console.error('Error al obtener alumnos', err),
    });
  }

  onCambioRendimiento(nuevoValor: Rendimiento) {
    this.rendimientoSeleccionado = nuevoValor;
  }

  goToOptionMenu() {
    this.router.navigate(['/options', this.idCurso]);
  }
}
