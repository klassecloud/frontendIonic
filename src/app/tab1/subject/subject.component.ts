import {Component} from '@angular/core';
import {TaskService} from '../../service/task.service';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {flatMap, map} from 'rxjs/operators';
import {Task} from '../../model/task';

@Component({
    selector: 'app-tasklist',
    templateUrl: './subject.component.html',
    styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent {

    tasks: Observable<Task[]>;

    constructor(
        private readonly route: ActivatedRoute,
        private readonly tasksService: TaskService,
    ) {
        this.tasks = route.params
            .pipe(map(params => params.id))
            .pipe(flatMap(id => this.tasksService.findBySubjectId(id)));
    }

}
