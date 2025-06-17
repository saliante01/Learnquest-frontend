import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { WelcomeCoursesComponent } from "../welcome-courses/welcome-courses.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, WelcomeCoursesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
