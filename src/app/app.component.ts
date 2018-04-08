import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AuthService } from './shared/auth.service';
import { ContentfulService} from './contentful.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isAuth$: Observable<firebase.User>;

  constructor( private authService: AuthService, private contentful: ContentfulService ) {
    this.isAuth$ = this.authService.getAuthState();
  }

  ngOnInit() {
    this.contentful.logContent();
  }

  onLogout() {
    this.authService.logout();
  }
}
