import { Component, Input } from '@angular/core';
import { AlumnoPromedio } from '../alumno-promedio.interface';
import { ChartComponent } from '../../chart/chart.component';
import { ChartBarItem } from '../../chart/chart-bar-item.interface';
import Color from 'color';

@Component({
  selector: 'app-chart-curso-rendimiento-preview',
  imports: [ChartComponent],
  templateUrl: './chart-curso-rendimiento-preview.component.html',
  styleUrl: './chart-curso-rendimiento-preview.component.css',
})
export class ChartCursoRendimientoPreviewComponent {
  @Input() alumnos: AlumnoPromedio[] = [];
  @Input() cursoColorHtml: string = '';

  get chartItems(): ChartBarItem[] {
    const armonico = Color(this.cursoColorHtml).rotate(120).alpha(0.8).string();

    return this.alumnos.map((alumno) => ({
      value: alumno.promedioAprobacion,
      color: armonico,
    }));
  }

  get chartWidth(): number {
  const maxBarWidth = 70;
  const minBarWidth = 20;
  const maxVisibleBars = 10;

  const cantidad = this.alumnos.length;

  let barWidth;

  if (cantidad <= maxVisibleBars) {
    barWidth = maxBarWidth;
  } else {
    barWidth = Math.max(minBarWidth, (maxVisibleBars * maxBarWidth) / cantidad);
  }

  return cantidad * barWidth + 20;
}
}
