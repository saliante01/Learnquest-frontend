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
    { nivel: 5, completados: 25, total: 40, contenido: 'grammar' },
    { nivel: 6, completados: 30, total: 40, contenido: 'vocabulary' },
    { nivel: 7, completados: 18, total: 40, contenido: 'conversation' },
    { nivel: 8, completados: 12, total: 40, contenido: 'pronunciation' }
  ];

  id!: number;
  currentPage = 0;
  pageSize = 4;

  get nivelesPaginados() {
    const start = this.currentPage * this.pageSize;
    return this.niveles.slice(start, start + this.pageSize);
  }

  get totalPaginas() {
    return Math.ceil(this.niveles.length / this.pageSize);
  }

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  volverAlTop() {
    this.router.navigate(['/top3', this.id]);
  }

  paginaAnterior() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  paginaSiguiente() {
    if ((this.currentPage + 1) * this.pageSize < this.niveles.length) {
      this.currentPage++;
    }
  }
}
