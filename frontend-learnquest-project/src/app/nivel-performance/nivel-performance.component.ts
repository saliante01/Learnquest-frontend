import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { NivelAprobacion } from './nivel-aprobacion.interface';
import { NivelesService } from '../services/niveles-service';

@Component({
  selector: 'app-nivel-performance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nivel-performance.component.html',
  styleUrls: ['./nivel-performance.component.css'],
})
export class NivelPerformanceComponent {
  niveles: NivelAprobacion[] = [];
  cursoId!: number;
  currentPage = 0;
  pageSize = 4;

  get nivelesPaginados() {
    const start = this.currentPage * this.pageSize;
    return this.niveles.slice(start, start + this.pageSize);
  }

  get totalPaginas() {
    return Math.ceil(this.niveles.length / this.pageSize);
  }

  constructor(
    private nivelesService: NivelesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.cursoId = Number(this.route.snapshot.paramMap.get('id'));

    this.nivelesService.getResumenesNiveles(this.cursoId).subscribe({
      next: (data) => {
        this.niveles = data.todosLosNiveles;
      },
      error: (err) => console.error('Error al obtener los niveles', err),
    });
  }

  volverAlTop() {
    this.router.navigate(['/top3', this.cursoId]);
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
