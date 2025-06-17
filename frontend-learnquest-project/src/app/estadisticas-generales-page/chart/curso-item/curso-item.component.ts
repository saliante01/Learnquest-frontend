import { Component, Input } from '@angular/core';
import { CursoPromedio } from '../../curso-promedio.interface';

@Component({
  selector: 'app-curso-item',
  imports: [],
  templateUrl: './curso-item.component.html',
  styleUrl: './curso-item.component.css'
})
export class CursoItemComponent {
  @Input() curso: CursoPromedio = null!;
}
