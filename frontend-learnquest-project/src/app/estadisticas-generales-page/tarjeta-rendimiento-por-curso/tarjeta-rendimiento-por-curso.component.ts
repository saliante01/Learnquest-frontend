import { Component, Input } from '@angular/core';
import { CursoPromedio } from '../curso-promedio.interface';

@Component({
  selector: 'app-tarjeta-rendimiento-por-curso',
  imports: [],
  templateUrl: './tarjeta-rendimiento-por-curso.component.html',
  styleUrl: './tarjeta-rendimiento-por-curso.component.css',
})
export class TarjetaRendimientoPorCursoComponent {
  @Input() curso: CursoPromedio = null!;
}
