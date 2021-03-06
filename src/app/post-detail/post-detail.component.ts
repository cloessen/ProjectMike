import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Entry } from 'contentful';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  public post$: Observable<any>;

  constructor() {}

  ngOnInit() {}
}
