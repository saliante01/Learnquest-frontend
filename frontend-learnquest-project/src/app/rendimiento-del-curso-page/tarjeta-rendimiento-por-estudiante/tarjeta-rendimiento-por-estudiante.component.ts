import { Component, Input } from '@angular/core';
import { RankingAlumno } from '../ranking-alumno.interface';

export enum EmojiRendimiento {
  Bajo = '😔',
  Medio = '😐',
}

@Component({
  selector: 'app-tarjeta-rendimiento-por-estudiante',
  standalone: true,
  imports: [],
  templateUrl: './tarjeta-rendimiento-por-estudiante.component.html',
  styleUrl: './tarjeta-rendimiento-por-estudiante.component.css',
})
export class TarjetaRendimientoPorEstudianteComponent {
  @Input() alumno: RankingAlumno = null!;

  obtenerEmoji(porcentaje: number): EmojiRendimiento | '' {
    if (porcentaje <= 20) {
      return EmojiRendimiento.Bajo;
    } else if (porcentaje <= 60) {
      return EmojiRendimiento.Medio;
    } else {
      return '';
    }
  }

  obtenerColorPorcentaje(porcentaje: number): string {
    if (porcentaje <= 20) {
      return '#FF1010';
    } else if (porcentaje <= 60) {
      return '#BEBC81';
    } else {
      return '#3C3C3C';
    }
  }
}
