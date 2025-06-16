import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curso-item',
  imports: [],
  templateUrl: './curso-item.component.html',
  styleUrl: './curso-item.component.css'
})
export class CursoItemComponent {
  @Input() nombre!: string;
  @Input() color!: string;
  @Input() porcentaje!: number;
}
