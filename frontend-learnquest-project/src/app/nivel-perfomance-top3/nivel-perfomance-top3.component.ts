import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nivel-perfomance-top3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nivel-perfomance-top3.component.html',
  styleUrls: ['./nivel-perfomance-top3.component.css'] // <- corregido
})
export class NivelPerfomanceTop3Component {
  id!: number;

  nivelesOriginal = [
    { nivel: 1, completados: 20, total: 40, contenido: 'speaking' },
    { nivel: 2, completados: 15, total: 40, contenido: 'listening' },
    { nivel: 3, completados: 20, total: 40, contenido: 'reading' },
    { nivel: 4, completados: 10, total: 40, contenido: 'writing' },
  ];

  niveles = this.nivelesOriginal.map((nivel, index) => ({ ...nivel, originalIndex: index }));

  nivelesTop3 = [...this.niveles]
    .sort((a, b) => b.completados - a.completados)
    .slice(0, 3);

  nivelMenosCompletado = this.niveles.reduce((min, actual) =>
    actual.completados < min.completados ? actual : min
  );

  nivelMenosCompletadoIndex = this.nivelMenosCompletado.originalIndex;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  verTodosLosNiveles() {
    this.router.navigate(['/nivel-performance', this.id]);
  }
}
