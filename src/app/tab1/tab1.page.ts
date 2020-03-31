import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../service/authentication.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService
  ) {}

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }
}
