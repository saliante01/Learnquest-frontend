import { Component, Input } from '@angular/core';
import { CursoPromedio } from '../curso-promedio.interface';
import { CursoItemComponent } from '../curso-item/curso-item.component';
import { ChartBarItem } from '../../chart/chart-bar-item.interface';
import { ChartComponent } from '../../chart/chart.component';

@Component({
  selector: 'app-chart-cursos',
  imports: [CursoItemComponent, ChartComponent],
  templateUrl: './chart-cursos.component.html',
  styleUrl: './chart-cursos.component.css'
})

export class ChartCursosComponent {
  @Input() cursos: CursoPromedio[] = [];

  get chartItems(): ChartBarItem[] {
    return this.cursos.map(curso => ({
      value: curso.rendimientoPromedio,
      color: curso.colorCurso,
    }));
  }
}
