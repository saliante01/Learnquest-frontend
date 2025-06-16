import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

import { Chart, BarController, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { CursoItemComponent } from "./curso-item/curso-item.component";

Chart.register(BarController, BarElement, CategoryScale, LinearScale);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  imports: [CursoItemComponent]
})
export class ChartComponent {
  @ViewChild('myChart') myChartRef!: ElementRef<HTMLCanvasElement>;

  courses = [
    { name: '3°ro A', value: 60, color: '#FF6384' },
    { name: '3°ro B', value: 80, color: '#36A2EB' },
    { name: '3°ro C', value: 45, color: '#FFCE56' }
  ];

  chartInstance?: Chart;

  ngAfterViewInit() {
    const ctx = this.myChartRef.nativeElement.getContext('2d');

    if (this.chartInstance) {
      this.chartInstance.destroy();
    }

    this.chartInstance = new Chart(ctx!, {
      type: 'bar',
      data: {
        labels: this.courses.map(() => ''),
        datasets: [
          {
            data: this.courses.map(c => c.value),
            backgroundColor: this.courses.map(c => c.color),
          },
        ]
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: {
            ticks: { display: false },
            grid: { display: false }
          },
          y: {
            beginAtZero: true,
            max: 100
          }
        }
      }
    });
  }
}
