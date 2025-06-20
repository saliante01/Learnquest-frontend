import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NivelTarjeta } from '../../performance-student-page/nivel-tarjeta.interface';

@Component({
  selector: 'app-student-level-card',
  imports: [CommonModule],
  templateUrl: './student-level-card.component.html',
  styleUrl: './student-level-card.component.css'
})
export class StudentLevelCardComponent {
  @Input() nivel: NivelTarjeta = null!;
  @Input() backgroundUrl: string = '';

  progresoAnimado: number = 0;

  ngOnInit() {
    this.animarProgreso(this.nivel.porcentajeAprobacion);
  }

  animarProgreso(meta: number) {
    const intervalo = setInterval(() => {
      if (this.progresoAnimado >= meta) {
        clearInterval(intervalo);
      } else {
        this.progresoAnimado += 1;
      }
    }, 15);
  }

  getConicGradient(porcentaje: number): string {
    return `conic-gradient(#4caf8e ${porcentaje}%, #ddd ${porcentaje}% 100%)`;
  }
}
