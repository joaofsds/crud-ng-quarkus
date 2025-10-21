import {Component, OnInit} from '@angular/core';
import { Course } from './model/course';
import { CoursesService } from './services/courses';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})
class Courses {
  courses: Course[] = [];
  coursesService: CoursesService;



  constructor() {
    this.coursesService = new CoursesService();
    this.courses = this.coursesService.list();
  }
}

export default Courses
