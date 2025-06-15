import { NgModule } from '@angular/core';
import { FiltrosRendimientoComponent } from './filtros-rendimiento/filtros-rendimiento.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: FiltrosRendimientoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
