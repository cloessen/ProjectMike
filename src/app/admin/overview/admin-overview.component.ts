import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AuthService } from '../../shared/auth.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-overview',
  templateUrl: './admin-overview.component.html',
  styleUrls: ['./admin-overview.component.scss']
})
export class AdminOverviewComponent implements OnInit {

  isAuth$: Observable<firebase.User>;

  constructor( private authService: AuthService) {
    this.isAuth$ = this.authService.getAuthState();
  }

  onLogout() {
    this.authService.logout();
  }
  ngOnInit() {

  }
}
