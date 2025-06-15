import { Component, EventEmitter, Output } from '@angular/core';

export enum Rendimiento {
  Mejores = 'mejores',
  Peores = 'peores'
}

@Component({
  selector: 'app-filtros-rendimiento',
  standalone: true,
  imports: [],
  templateUrl: './filtros-rendimiento.component.html',
  styleUrls: ['./filtros-rendimiento.component.css']
})
export class FiltrosRendimientoComponent {
  seleccionado: Rendimiento = Rendimiento.Mejores;
  rendimientoEnum = Rendimiento;

  @Output() seleccionadoChange = new EventEmitter<Rendimiento>();

  onSeleccionChange(value: Rendimiento) {
    this.seleccionado = value;
    this.seleccionadoChange.emit(this.seleccionado);
  }
}
