import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { UIService } from './ui.service';

@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth, public router: Router, private UI: UIService) { }

  login(email, password) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(() => this.router.navigateByUrl('/admin/overview'))
      .catch((error: Error) => this.UI.openSnackbar(error.message, 3000));
  }

  getAuthState() {
    return this.afAuth.authState;
  }

  logout() {
    this.afAuth.auth.signOut().then(() => this.router.navigateByUrl('/'));
  }

}
