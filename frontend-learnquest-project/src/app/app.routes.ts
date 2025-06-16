import { Routes } from '@angular/router';
import { WelcomeCoursesComponent } from './welcome-courses/welcome-courses.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { OptionsComponent } from './options/options.component';
import { StudentPerformanceComponent } from './student-performance/student-performance.component';
import { PerformanceStudentPageComponent } from './performance-student-page/performance-student-page.component';
import { NivelPerformanceComponent } from './nivel-performance/nivel-performance.component';
import { PerformanceNivelComponent } from './performance-nivel/performance-nivel.component';
import { NivelPerfomanceTop3Component } from './nivel-perfomance-top3/nivel-perfomance-top3.component';
import { Top3PerformanceNivelComponent } from './top3-performance-nivel/top3-performance-nivel.component';
export const routes: Routes = [
    //{ path: 'welcome', component: WelcomeCoursesComponent}, 
    { path: 'navbar', component: NavbarComponent},
    { path: 'home',component:HomeComponent},
    { path: 'options/:id', component: OptionsComponent },
    { path: 'student-performance/:id', component: PerformanceStudentPageComponent},
    { path: 'nivel-performance/:id', component: PerformanceNivelComponent},
    { path: 'top3/:id', component:Top3PerformanceNivelComponent}
];
