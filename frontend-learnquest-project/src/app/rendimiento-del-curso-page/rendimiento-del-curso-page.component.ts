import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltrosRendimientoComponent } from '../filtros-rendimiento/filtros-rendimiento.component';
import { TarjetaRendimientoPorEstudianteComponent } from '../tarjeta-rendimiento-por-estudiante/tarjeta-rendimiento-por-estudiante.component';
import { Rendimiento } from '../filtros-rendimiento/rendimiento.enum';

@Component({
  selector: 'app-rendimiento-del-curso-page',
  standalone: true,
  imports: [FiltrosRendimientoComponent, TarjetaRendimientoPorEstudianteComponent, CommonModule],
  templateUrl: './rendimiento-del-curso-page.component.html',
  styleUrl: './rendimiento-del-curso-page.component.css'
})
export class RendimientoDelCursoPageComponent {
  rendimientoEnum = Rendimiento;
  rendimientoSeleccionado: Rendimiento = this.rendimientoEnum.Mejores;

  onCambioRendimiento(nuevoValor: Rendimiento) {
    this.rendimientoSeleccionado = nuevoValor;
  }
}
