import {EventEmitter, Injectable} from '@angular/core';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private signedIn = false;
  private user = null;

  constructor() {

  }

  authStateListener() {
    firebase.auth().onAuthStateChanged(user => {
      this.signedIn = !!user;
    });
  }

  signin(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  listener(): EventEmitter<boolean> {
    const emitter = new EventEmitter();
    firebase.auth().onAuthStateChanged(user => user ? emitter.emit(true) : emitter.emit(false));
    return emitter;
  }

  isAuthenticated() {
    return this.signedIn;
  }

  isSignedIn() {

  }

  signOut() {
    firebase.auth().signOut().then(result => console.log('Logged Out', result));
  }

  getCurrentUser() {

  }

  registerUser(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password).then(result => {
      this.signedIn = !!result;
      this.user = result;
    });
  }
}
