import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { OptionsComponent } from './options/options.component';
import { PerformanceStudentPageComponent } from './performance-student-page/performance-student-page.component';
import { PerformanceNivelComponent } from './performance-nivel/performance-nivel.component';
import { Top3PerformanceNivelComponent } from './top3-performance-nivel/top3-performance-nivel.component';
import { RendimientoDelCursoPageComponent } from './rendimiento-del-curso-page/rendimiento-del-curso-page.component';
import { EstadisticasGeneralesPageComponent } from './estadisticas-generales-page/estadisticas-generales-page.component';
export const routes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: 'home', component: HomeComponent },
  { path: 'options/:id', component: OptionsComponent },
  {
    path: 'student-performance/:id',
    component: PerformanceStudentPageComponent,
  },
  { path: 'nivel-performance/:id', component: PerformanceNivelComponent },
  { path: 'top3/:id', component: Top3PerformanceNivelComponent },
  { path: 'rendimiento-curso', component: RendimientoDelCursoPageComponent },
  { path: 'estadisticas-generales', component: EstadisticasGeneralesPageComponent },
];
