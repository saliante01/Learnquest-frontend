import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltrosRendimientoComponent } from './filtros-rendimiento/filtros-rendimiento.component';
import { TarjetaRendimientoPorEstudianteComponent } from './tarjeta-rendimiento-por-estudiante/tarjeta-rendimiento-por-estudiante.component';
import { Rendimiento } from './filtros-rendimiento/rendimiento.enum';
import { Estudiante } from './estudiante.interface';
import { NavbarComponent } from "../navbar/navbar.component";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rendimiento-del-curso-page',
  standalone: true,
  imports: [FiltrosRendimientoComponent, TarjetaRendimientoPorEstudianteComponent, CommonModule, NavbarComponent],
  templateUrl: './rendimiento-del-curso-page.component.html',
  styleUrl: './rendimiento-del-curso-page.component.css'
})

export class RendimientoDelCursoPageComponent {

  constructor(private router: Router, private route: ActivatedRoute) {}

  rendimientoEnum = Rendimiento;

  rendimientoSeleccionado: Rendimiento = this.rendimientoEnum.Mejores;

  peoresEstudiantes: Estudiante[] = [
    { nombre: 'Jorge', nivel: 'Nivel 1', porcentaje: 15 },
    { nombre: 'Fabiola', nivel: 'Nivel 1', porcentaje: 20 },
    { nombre: 'Ricardo', nivel: 'Nivel 1', porcentaje: 35 },
    { nombre: 'Samuel', nivel: 'Nivel 2', porcentaje: 36 },
    { nombre: 'Oscar', nivel: 'Nivel 2', porcentaje: 37 }
  ];

  mejoresEstudiantes: Estudiante[] = [
    { nombre: 'Felipe', nivel: 'Nivel 7', porcentaje: 90 },
    { nombre: 'Francisco', nivel: 'Nivel 5', porcentaje: 90 },
    { nombre: 'Sebastián', nivel: 'Nivel 5', porcentaje: 80 },
    { nombre: 'Juan', nivel: 'Nivel 4', porcentaje: 85 },
    { nombre: 'Diego', nivel: 'Nivel 4', porcentaje: 84 }
  ];

  onCambioRendimiento(nuevoValor: Rendimiento) {
    this.rendimientoSeleccionado = nuevoValor;
  }

  goToOptionMenu() {
    this.router.navigate(['/options', 1]);
  }
}
