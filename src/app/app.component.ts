import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AuthService } from './shared/auth.service';
import { ContentfulService } from './contentful.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isAuth$: Observable<firebase.User>;

  constructor(
    private authService: AuthService,
    private contentful: ContentfulService
  ) {}

  ngOnInit() {
    this.isAuth$ = this.authService.getAuthState();
    // this.contentful.logContent();
    // this.store.subscribe(data => console.log(data));
  }

  onLogout() {
    this.authService.logout();
  }
}
