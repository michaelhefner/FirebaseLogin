import {Component} from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import {AuthService} from './auth/auth.service';
import {Router} from '@angular/router';
import {ConfigFile} from '../configFile';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'login';

  constructor(private authService: AuthService, private router: Router) {
    firebase.initializeApp(ConfigFile.firebaseConfig());
    authService.authStateListener();
  }

}
