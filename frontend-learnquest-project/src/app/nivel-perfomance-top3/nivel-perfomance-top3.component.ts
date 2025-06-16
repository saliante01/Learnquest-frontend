import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nivel-perfomance-top3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nivel-perfomance-top3.component.html',
  styleUrls: ['./nivel-perfomance-top3.component.css']
})
export class NivelPerfomanceTop3Component {
  id!: number;

  nivelesOriginal = [
    { nivel: 1, completados: 20, total: 40, contenido: 'speaking' },
    { nivel: 2, completados: 15, total: 40, contenido: 'listening' },
    { nivel: 3, completados: 20, total: 40, contenido: 'reading' },
    { nivel: 4, completados: 10, total: 40, contenido: 'writing' },
    { nivel: 5, completados: 25, total: 40, contenido: 'grammar' },
    { nivel: 6, completados: 5, total: 40, contenido: 'vocabulary' }
  ];

  niveles = this.nivelesOriginal.map((nivel, index) => ({
    ...nivel,
    originalIndex: index
  }));

  nivelMenosCompletado = this.niveles.reduce((min, actual) =>
    actual.completados < min.completados ? actual : min
  );

  nivelMenosCompletadoIndex = this.nivelMenosCompletado.originalIndex;

  nivelesTop3 = this.niveles
    .filter(n => n.originalIndex !== this.nivelMenosCompletadoIndex)
    .sort((a, b) => b.completados - a.completados)
    .slice(0, 3);

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  verTodosLosNiveles() {
    this.router.navigate(['/nivel-performance', this.id]);
  }
}
