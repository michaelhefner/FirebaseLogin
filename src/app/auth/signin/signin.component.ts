import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass']
})
export class SigninComponent implements OnInit {

  errorMessage: string;
  signinForm = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl(''),
  });

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['']).then(r => console.log(r));
    }
  }

  signIn() {
    this.authService.signin(this.signinForm.value.email, this.signinForm.value.password)
      .then(result => {
        if (result) {
          this.router.navigate(['']);
        }
      }).catch(error => this.errorMessage = error.toString());
  }

}


