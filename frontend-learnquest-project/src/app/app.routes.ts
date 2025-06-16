import { Routes } from '@angular/router';
import { WelcomeCoursesComponent } from './welcome-courses/welcome-courses.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { OptionsComponent } from './options/options.component';

export const routes: Routes = [
    { path: 'welcome', component: WelcomeCoursesComponent}, 
    { path: 'navbar', component: NavbarComponent},
    { path: 'home',component:HomeComponent},
    {path: 'options',component: OptionsComponent}
];
