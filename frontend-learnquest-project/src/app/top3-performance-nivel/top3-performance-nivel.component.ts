import { Component } from '@angular/core';
import { NivelPerfomanceTop3Component } from "../nivel-perfomance-top3/nivel-perfomance-top3.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-top3-performance-nivel',
  imports: [NivelPerfomanceTop3Component, NavbarComponent],
  templateUrl: './top3-performance-nivel.component.html',
  styleUrl: './top3-performance-nivel.component.css'
})
export class Top3PerformanceNivelComponent {

}
