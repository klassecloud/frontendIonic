import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../service/authentication.service";
//import {ClassroomService} from "../service/classroom.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService,
      //private classRoomService: ClassroomService
  ) {}

  ngOnInit(): void {
    //this.classRoomService.getSubjects();
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }
}
