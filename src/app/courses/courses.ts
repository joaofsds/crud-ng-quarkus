import {Component, OnInit} from '@angular/core';
import { Course } from './model/course';
import { CoursesService } from './services/courses';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-courses',
  imports: [
    AsyncPipe
  ],
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})
class Courses implements OnInit {
  courses: Observable<Course[]>;

  constructor(private coursesService: CoursesService) {
    this.courses = this.coursesService.list();

  }

  ngOnInit(): void {
    }
}

export default Courses
