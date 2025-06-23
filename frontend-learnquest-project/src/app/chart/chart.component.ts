import { Component, ViewChild, ElementRef, Input } from '@angular/core';

import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { ChartBarItem } from './chart-bar-item.interface';

Chart.register(BarController, BarElement, CategoryScale, LinearScale);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent {
  @ViewChild('myChart') myChartRef!: ElementRef<HTMLCanvasElement>;

  @Input() items: ChartBarItem[] = [];
  @Input() width = 400;
  @Input() height = 400;

  chartInstance?: Chart;

  ngAfterViewInit() {
    const ctx = this.myChartRef.nativeElement.getContext('2d');

    if (this.chartInstance) {
      this.chartInstance.destroy();
    }

    this.chartInstance = new Chart(ctx!, {
      type: 'bar',
      data: {
        labels: this.items.map(() => ''),
        datasets: [
          {
            data: this.items.map((i) => i.value),
            backgroundColor: this.items.map((i) => i.color),
            categoryPercentage: 1.0,
            barPercentage: 1.0,
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
            min: -0.5,
            max: this.items.length - 0.5,
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
