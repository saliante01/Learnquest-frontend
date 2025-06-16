import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nivel-performance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nivel-performance.component.html',
  styleUrls: ['./nivel-performance.component.css']
})
export class NivelPerformanceComponent {
  niveles = [
    { nivel: 1, completados: 20, total: 40, contenido: 'speaking' },
    { nivel: 2, completados: 15, total: 40, contenido: 'listening' },
    { nivel: 3, completados: 20, total: 40, contenido: 'reading' },
    { nivel: 4, completados: 10, total: 40, contenido: 'writing' },
  ];

  id!: number;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  volverAlTop() {
    this.router.navigate(['/top3', this.id]);
  }
}
