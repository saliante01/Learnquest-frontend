import { Component, EventEmitter, Output } from "@angular/core";
import { FiltrosBaseComponent } from "../../filtros-base/filtros-base.component";
import { Rendimiento } from "./rendimiento.enum";

@Component({
  selector: 'app-filtros-rendimiento',
  standalone: true,
  imports: [FiltrosBaseComponent],
  templateUrl: './filtros-rendimiento.component.html',
  styleUrls: ['./filtros-rendimiento.component.css']
})

export class FiltrosRendimientoComponent {
  rendimientoEnum = Rendimiento;
  @Output() seleccionadoChange = new EventEmitter<Rendimiento>();

  opciones = [
    { label: 'Mejores rendimientos', value: Rendimiento.Mejores },
    { label: 'Peores rendimientos', value: Rendimiento.Peores }
  ];

  seleccionado = Rendimiento.Mejores;

  onSeleccionChange(value: Rendimiento) {
    this.seleccionado = value;
    this.seleccionadoChange.emit(value);
  }
}
