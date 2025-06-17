import {
  Component,
  ViewChild,
  ElementRef,
  Input,
} from '@angular/core';

import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { CursoItemComponent } from './curso-item/curso-item.component';
import { CursoPromedio } from '../curso-promedio.interface';

Chart.register(BarController, BarElement, CategoryScale, LinearScale);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  imports: [CursoItemComponent],
})
export class ChartComponent {
  @ViewChild('myChart') myChartRef!: ElementRef<HTMLCanvasElement>;

  @Input() cursos: CursoPromedio[] = [];

  chartInstance?: Chart;

  ngAfterViewInit() {
    const ctx = this.myChartRef.nativeElement.getContext('2d');

    if (this.chartInstance) {
      this.chartInstance.destroy();
    }

    this.chartInstance = new Chart(ctx!, {
      type: 'bar',
      data: {
        labels: this.cursos.map(() => ''),
        datasets: [
          {
            data: this.cursos.map((c) => c.rendimientoPromedio),
            backgroundColor: this.cursos.map((c) => c.colorCurso),
          },
        ],
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
        },
        scales: {
          x: {
            ticks: { display: false },
            grid: { display: false },
          },
          y: {
            beginAtZero: true,
            max: 100,
          },
        },
      },
    });
  }
}
