import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Entry, EntryCollection } from 'contentful';
import { Store } from '@ngrx/store';
import * as AppActions from '../app.actions';
import { Router } from '@angular/router';
import * as fromApp from '../app.reducer';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  contents$: Observable<Entry<any>[]>;
  isLoading$: Observable<boolean>;

  constructor(
    private contentful: ContentfulService,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    this.contents$ = this.contentful.getAllBlogPosts();
    this.store.select(fromApp.getIsLoading);
  }

  onShowPostDetails(entry: Entry<any>) {
    console.log(entry);
    this.router.navigate(['/post-detail']);
  }
}
