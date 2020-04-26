import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Task} from 'src/app/model/task';

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    constructor(private http: HttpClient) {}

    findBySubjectId(id: number): Observable<Task[]> {
        return this.http
            .get<any>(`${environment.apiUrl}/rest/subjects/${id}/tasks`)
            .pipe(map(r => r ? r._embedded : undefined))
            .pipe(map(e => e ? e.tasks : undefined));
    }

}
