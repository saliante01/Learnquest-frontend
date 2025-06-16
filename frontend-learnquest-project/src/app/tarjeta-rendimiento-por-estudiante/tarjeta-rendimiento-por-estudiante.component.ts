import { Component, Input } from '@angular/core';

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
  @Input() nombre!: string;
  @Input() nivel!: string;
  @Input() porcentaje!: number;

  obtenerEmoji(porcentaje: number): EmojiRendimiento {
    return porcentaje <= 20 ? EmojiRendimiento.Bajo : EmojiRendimiento.Medio;
  }

  obtenerColorPorcentaje(porcentaje: number): string {
    return porcentaje < 20 ? '#FF1010' : '#BEBC81';
  }
}
