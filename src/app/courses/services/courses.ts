import {Injectable, OnInit} from '@angular/core';
import {Course} from '../model/course';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) {
  }

  private readonly API = '/assets/courses.json';

  list() {
    return this.httpClient.get<Course[]>(this.API)
      .pipe(
        tap(courses => console.log(courses))
      );
  }

}
