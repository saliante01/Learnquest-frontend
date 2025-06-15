import { Component } from '@angular/core';

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
  nombre = "Jorge";
  nivel = "Nivel 1";
  porcentaje = 15;

  obtenerEmoji(porcentaje: number): EmojiRendimiento {
    return porcentaje < 20 ? EmojiRendimiento.Bajo : EmojiRendimiento.Medio;
  }
}
