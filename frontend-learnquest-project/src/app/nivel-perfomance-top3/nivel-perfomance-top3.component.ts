import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResumenNivelesAprobacion } from '../nivel-performance/resumen-niveles-aprobacion.interface';
import { NivelesService } from '../services/niveles-service';

@Component({
  selector: 'app-nivel-perfomance-top3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nivel-perfomance-top3.component.html',
  styleUrls: ['./nivel-perfomance-top3.component.css'],
})
export class NivelPerfomanceTop3Component {
  cursoId!: number;

  resumenNiveles: ResumenNivelesAprobacion = null!;
  nivelMenosCompletadoIndex: number = 0;
  top3NivelesIndexes: number[] = [];

  constructor(
    private nivelesService: NivelesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.cursoId = Number(this.route.snapshot.paramMap.get('id'));

    if (!this.cursoId) {
      console.error('ID de curso inválido');
      return;
    }

    this.cargarResumenDeNiveles();
  }

  cargarResumenDeNiveles(): void {
    this.nivelesService.getResumenesNiveles(this.cursoId).subscribe({
      next: (data) => {
        this.resumenNiveles = data;
        this.actualizarNivelMenosCompletadoIndex();
        this.actualizarTop3NivelesIndexes();
      },
      error: (err) => console.error('Error al obtener los niveles', err),
    });
  }

  actualizarNivelMenosCompletadoIndex(): void {
    this.nivelMenosCompletadoIndex =
      this.resumenNiveles.todosLosNiveles.findIndex(
        (n) =>
          n.nombreNivel ===
          this.resumenNiveles.nivelConMenorAprobacion.nombreNivel
      );
  }

  actualizarTop3NivelesIndexes(): void {
    if (
      !this.resumenNiveles?.top3NivelesConMayorAprobacion ||
      !this.resumenNiveles?.todosLosNiveles
    ) {
      this.resumenNiveles.top3NivelesConMayorAprobacion = [];
      return;
    }

    this.resumenNiveles.top3NivelesConMayorAprobacion =
      this.resumenNiveles.top3NivelesConMayorAprobacion.map((nivel) => {
        const originalIndex = this.resumenNiveles.todosLosNiveles.findIndex(
          (n) => n.nombreNivel === nivel.nombreNivel
        );
        return { ...nivel, originalIndex };
      });
  }

  verTodosLosNiveles() {
    this.router.navigate(['/nivel-performance', this.cursoId]);
  }
}
