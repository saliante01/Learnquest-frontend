import { Component } from '@angular/core';
import { FiltrosRendimientoComponent } from "../filtros-rendimiento/filtros-rendimiento.component";
import { TarjetaRendimientoPorEstudianteComponent } from "../tarjeta-rendimiento-por-estudiante/tarjeta-rendimiento-por-estudiante.component";

@Component({
  selector: 'app-rendimiento-del-curso-page',
  imports: [FiltrosRendimientoComponent, TarjetaRendimientoPorEstudianteComponent],
  templateUrl: './rendimiento-del-curso-page.component.html',
  styleUrl: './rendimiento-del-curso-page.component.css'
})
export class RendimientoDelCursoPageComponent {

}
