import { Routes } from '@angular/router';
import Courses from './courses/courses';

export const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  {
    path: 'courses',
    loadComponent: () => import('./courses/courses').then((m) => m.default),
  },
];
