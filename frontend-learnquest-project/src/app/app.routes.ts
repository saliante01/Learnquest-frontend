import { NgModule } from '@angular/core';
import { FiltrosRendimientoComponent } from './filtros-rendimiento/filtros-rendimiento.component';
import { RouterModule, Routes } from '@angular/router';
import { TarjetaRendimientoPorEstudianteComponent } from './tarjeta-rendimiento-por-estudiante/tarjeta-rendimiento-por-estudiante.component';

export const routes: Routes = [
  { path: '', component: TarjetaRendimientoPorEstudianteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
