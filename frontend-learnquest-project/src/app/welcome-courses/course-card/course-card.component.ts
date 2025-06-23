import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartCursoRendimientoPreviewComponent } from '../chart-curso-rendimiento-preview/chart-curso-rendimiento-preview.component';
import { CursoDashboard } from '../curso-dashboard.interface';
import Color from 'color';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  imports: [CommonModule, ChartCursoRendimientoPreviewComponent],
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent {
  @Input() course: CursoDashboard = null!;
  @Output() viewCourse = new EventEmitter<number>();

  goToCourse() {
    this.viewCourse.emit(this.course.idCurso);
  }

  get colorHtml(): string {
  return Color(this.course.colorCurso)
    .mix(Color('white'), 0.25)
    .rgb()
    .string();
}
}
