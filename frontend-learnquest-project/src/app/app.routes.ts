import { NgModule } from '@angular/core';
import { FiltrosRendimientoComponent } from './filtros-rendimiento/filtros-rendimiento.component';
import { RouterModule, Routes } from '@angular/router';
import { TarjetaRendimientoPorEstudianteComponent } from './tarjeta-rendimiento-por-estudiante/tarjeta-rendimiento-por-estudiante.component';
import { RendimientoDelCursoPageComponent } from './rendimiento-del-curso-page/rendimiento-del-curso-page.component';

export const routes: Routes = [
  { path: 'rendimiento-curso', component: RendimientoDelCursoPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
