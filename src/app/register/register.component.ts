import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../service/authentication.service';
import {MustMatch} from '../helpers/must-match.validator';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  loading = false;
  error: '';

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }



  ngOnInit() {
    this.registerForm = this.formBuilder.group({
          username: ['', Validators.required],
          nickname: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(8)]],
          passwordRepeat: ['', Validators.required]
        },
        {
          validator: MustMatch('password', 'passwordRepeat')
        });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    this.authenticationService.register(this.f.username.value, this.f.password.value, this.f.nickname.value)
        .pipe(first())
        .subscribe(
            data => {
              this.router.navigate(['/']);
            },
            error => {
              this.error = error;
              this.loading = false;
            }
        );

  }

  onReset() {
    this.submitted = false;
    this.loading = false;
    this.registerForm.reset();
  }

}
