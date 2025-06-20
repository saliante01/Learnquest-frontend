import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { NivelPerformanceComponent } from '../nivel-performance/nivel-performance.component';
import { ActivatedRoute } from '@angular/router';
import { NivelesService } from '../services/niveles-service';
import { ResumenNivelesAprobacion } from '../nivel-performance/resumen-niveles-aprobacion.interface';

@Component({
  selector: 'app-performance-nivel',
  imports: [NavbarComponent, NivelPerformanceComponent],
  templateUrl: './performance-nivel.component.html',
  styleUrl: './performance-nivel.component.css',
})
export class PerformanceNivelComponent {

}
