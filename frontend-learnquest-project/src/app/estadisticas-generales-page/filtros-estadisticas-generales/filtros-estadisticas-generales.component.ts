import { Component, EventEmitter, Output } from '@angular/core';
import { EstadisticaGeneral } from './estadistica-general.enum';
import { FiltrosBaseComponent } from "../../filtros-base/filtros-base.component";

@Component({
  selector: 'app-filtros-estadisticas-generales',
  standalone: true,
  imports: [FiltrosBaseComponent],
  templateUrl: './filtros-estadisticas-generales.component.html',
  styleUrl: './filtros-estadisticas-generales.component.css'
})
export class FiltrosEstadisticasGeneralesComponent {
  estadisticaGeneralEnum = EstadisticaGeneral;
  @Output() seleccionadoChange = new EventEmitter<EstadisticaGeneral>();

  opciones = [
    { label: 'Gráfico general', value: EstadisticaGeneral.Grafico },
    { label: 'Top 3 cursos', value: EstadisticaGeneral.Top3 }
  ];

  seleccionado = EstadisticaGeneral.Grafico;

  onSeleccionChange(value: EstadisticaGeneral) {
    this.seleccionado = value;
    this.seleccionadoChange.emit(value);
  }
}
