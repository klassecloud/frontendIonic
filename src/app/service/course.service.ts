import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Task} from 'src/app/model/task';
import {Course} from '../model/course';

@Injectable({
    providedIn: 'root'
})
export class CourseService {

    constructor(private http: HttpClient) {}

    findAll(): Observable<Course[]> {
        return this.http
            .get<any>(`${environment.apiUrl}/rest/classrooms/2/subjects`)
            .pipe(map(r => r ? r._embedded : undefined))
            .pipe(map(e => e ? e.subjects : undefined))
            ;
    }

}
