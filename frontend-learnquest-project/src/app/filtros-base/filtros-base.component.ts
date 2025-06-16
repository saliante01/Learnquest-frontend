import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OpcionFiltro } from './opcion-filtro';

@Component({
  selector: 'app-filtros-base',
  imports: [],
  templateUrl: './filtros-base.component.html',
  styleUrl: './filtros-base.component.css'
})

export class FiltrosBaseComponent {
  @Input() opciones: OpcionFiltro[] = [];
  @Input() seleccionado: any;
  @Output() seleccionadoChange = new EventEmitter<any>();

  onSeleccionChange(value: any) {
    this.seleccionado = value;
    this.seleccionadoChange.emit(value);
  }
}
