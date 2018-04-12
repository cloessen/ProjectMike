import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Entry, EntryCollection } from 'contentful';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  contents$: Observable<Entry<any>[]>;

  constructor(private contentful: ContentfulService) { }

  ngOnInit() {
    this.contents$ = this.contentful.getAllBlogPosts();
  }

}
