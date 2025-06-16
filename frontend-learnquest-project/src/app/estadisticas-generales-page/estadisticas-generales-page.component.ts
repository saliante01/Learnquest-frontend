import { Component } from '@angular/core';
import { ChartComponent } from '../chart/chart.component';
import { FiltrosEstadisticasGeneralesComponent } from './filtros-estadisticas-generales/filtros-estadisticas-generales.component';
import { EstadisticaGeneral } from './filtros-estadisticas-generales/estadistica-general.enum';
import { TarjetaRendimientoPorCursoComponent } from './tarjeta-rendimiento-por-curso/tarjeta-rendimiento-por-curso.component';
import { Curso } from './curso.interface';

@Component({
  selector: 'app-estadisticas-generales-page',
  standalone: true,
  imports: [ChartComponent, FiltrosEstadisticasGeneralesComponent, TarjetaRendimientoPorCursoComponent],
  templateUrl: './estadisticas-generales-page.component.html',
  styleUrl: './estadisticas-generales-page.component.css',
})
export class EstadisticasGeneralesPageComponent {
  estadisticaGeneralEnum = EstadisticaGeneral;
  estadisticaGeneralSeleccionado: EstadisticaGeneral = this.estadisticaGeneralEnum.Grafico;

  cursos: Curso[] = [
      { name: '3°ro A', value: 60, color: '#FF6384' },
      { name: '3°ro B', value: 80, color: '#36A2EB' },
      { name: '3°ro C', value: 45, color: '#FFCE56' }
  ];

  onCambioEstadisticas(nuevoValor: EstadisticaGeneral) {
    this.estadisticaGeneralSeleccionado = nuevoValor;
  }
}
