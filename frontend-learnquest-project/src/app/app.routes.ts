import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RendimientoDelCursoPageComponent } from './rendimiento-del-curso-page/rendimiento-del-curso-page.component';
import { EstadisticasGeneralesPageComponent } from './estadisticas-generales-page/estadisticas-generales-page.component';

export const routes: Routes = [
  { path: 'rendimiento-curso', component: RendimientoDelCursoPageComponent },
  {path: 'estadisticas', component: EstadisticasGeneralesPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
