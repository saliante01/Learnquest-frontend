import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { StudentPerformanceComponent } from "../student-performance/student-performance.component";

@Component({
  selector: 'app-performance-student-page',
  imports: [NavbarComponent, StudentPerformanceComponent],
  templateUrl: './performance-student-page.component.html',
  styleUrl: './performance-student-page.component.css'
})
export class PerformanceStudentPageComponent {

}
