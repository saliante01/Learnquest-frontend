import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-option-course',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './option-course.component.html',
  styleUrls: ['./option-course.component.css']  // corregido: styleUrls
})
export class OptionCourseComponent {
  courseId!: number;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // Obtener id de la ruta
    this.courseId = Number(this.route.snapshot.paramMap.get('id'));
  }

  goToStudentPerformance() {
    this.router.navigate(['/student-performance', this.courseId]);
  }

  goToNivelPerformance() {
    this.router.navigate(['/top3', this.courseId]);
  }
}
