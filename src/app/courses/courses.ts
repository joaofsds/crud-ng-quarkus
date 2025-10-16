import { Component } from '@angular/core';
import { Course } from './model/course';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})
export class Courses {
  courses: Course[] = [
    {
      _id: '1',
      name: 'Angular',
      category: 'Frontend',
    },
  ];

  constructor() {}
}
