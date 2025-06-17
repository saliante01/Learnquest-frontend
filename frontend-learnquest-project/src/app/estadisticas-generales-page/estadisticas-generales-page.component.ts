import { Component, OnInit } from '@angular/core';
import { ChartComponent } from './chart/chart.component';
import { FiltrosEstadisticasGeneralesComponent } from './filtros-estadisticas-generales/filtros-estadisticas-generales.component';
import { EstadisticaGeneral } from './filtros-estadisticas-generales/estadistica-general.enum';
import { TarjetaRendimientoPorCursoComponent } from './tarjeta-rendimiento-por-curso/tarjeta-rendimiento-por-curso.component';
import { NavbarComponent } from "../navbar/navbar.component";
import { Estadisticas } from './estadisticas.interface';
import { CursosService } from '../services/cursos-service';

@Component({
  selector: 'app-estadisticas-generales-page',
  standalone: true,
  imports: [ChartComponent, FiltrosEstadisticasGeneralesComponent, TarjetaRendimientoPorCursoComponent, NavbarComponent],
  templateUrl: './estadisticas-generales-page.component.html',
  styleUrl: './estadisticas-generales-page.component.css',
})
export class EstadisticasGeneralesPageComponent implements OnInit {
  estadisticaGeneralEnum = EstadisticaGeneral;
  estadisticaGeneralSeleccionado: EstadisticaGeneral = this.estadisticaGeneralEnum.Grafico;

  cursos: Estadisticas = null!;

  constructor(private cursosService: CursosService) {}

  ngOnInit(): void {
    this.cursosService.getEstadisticasGenerales().subscribe({
      next: (data) => (this.cursos = data),
      error: (err) => console.error('Error al obtener cursos', err)
    });
  }

  onCambioEstadisticas(nuevoValor: EstadisticaGeneral) {
    this.estadisticaGeneralSeleccionado = nuevoValor;
  }
}
