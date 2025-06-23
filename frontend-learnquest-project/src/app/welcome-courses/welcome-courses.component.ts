import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CursoDashboard } from './curso-dashboard.interface';
import { CourseCardComponent } from "./course-card/course-card.component";

@Component({
  selector: 'app-welcome-courses',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './welcome-courses.component.html',
  styleUrls: ['./welcome-courses.component.css']
})
export class WelcomeCoursesComponent {
  @Input() courses: CursoDashboard[] = [];

  constructor(private router: Router) {}

  goToCourse(id: number) {
    this.router.navigate(['/options', id]);
  }
}
