import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../service/authentication.service';
import {CourseService} from '../service/course.service';
import {Course} from '../model/course';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

    courses: Observable<Course[]>;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private authenticationService: AuthenticationService,
        private courseService: CourseService,
    ) {
    }

    ngOnInit(): void {
        this.courses = this.courseService.findAll();
    }

    navigateTo(course: Course) {
        const href = course._links.self.href;
        const route = `subjects/${href.substring(href.lastIndexOf('/') + 1)}`;
        this.router.navigate([route], { relativeTo: this.route });
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/']);
    }

    icon(course: Course) {
        switch (course.name) {
            case 'Mathe': return '../../assets/img/math.png';
            case 'Biologie': return '../../assets/img/biologie.png';
            case 'Deutsch': return '../../assets/img/list.png';
            case 'Chemie': return '../../assets/img/microscope.png';
            case 'Englisch': return '../../assets/img/classroom.png';
            case 'Sport': return '../../assets/img/sport.png';
            default: return undefined;
        }
    }
}
