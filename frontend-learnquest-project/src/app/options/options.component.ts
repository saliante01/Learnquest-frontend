import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { OptionCourseComponent } from "../option-course/option-course.component";

@Component({
  selector: 'app-options',
  imports: [NavbarComponent, OptionCourseComponent],
  templateUrl: './options.component.html',
  styleUrl: './options.component.css'
})
export class OptionsComponent {

}
