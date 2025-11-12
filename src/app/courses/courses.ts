import { Component, OnInit } from '@angular/core';
import { Course } from './model/course';
import { CoursesService } from './services/courses';
import { catchError, Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ErrorDialogue } from '../../shared/components/error-dialogue/error-dialogue';
import { SharedModule } from '../../shared/shared-module';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-courses',
  imports: [AsyncPipe, MatIcon, SharedModule],
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})
class Courses implements OnInit {
  courses$: Observable<Course[]>;

  constructor(
    private coursesService: CoursesService,
    private dialog: MatDialog
  ) {
    this.courses$ = this.coursesService.list().pipe(
      catchError((error) => {
        this.onError('Error loading courses.');
        return of([]);
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogue, { data: errorMsg });
  }

  ngOnInit(): void {
    // Component initialization
  }
}

export default Courses;
