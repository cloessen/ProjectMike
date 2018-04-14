import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Entry, EntryCollection } from 'contentful';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import * as AppActions from '../app.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  contents$: Observable<Entry<any>[]>;

  constructor(
    private contentful: ContentfulService,
    private store: Store<AppState>,
    private router: Router) { }

  ngOnInit() {
    this.contents$ = this.contentful.getAllBlogPosts();
  }

  onShowPostDetails(entry: Entry<any>) {
    console.log(entry);
    this.store.dispatch(new AppActions.ShowPostDetails(entry));
    this.router.navigate(['/post-detail']);
  }

}
