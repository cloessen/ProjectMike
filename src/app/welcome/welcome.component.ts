import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  content$: Observable<any>;

  constructor(private contentful : ContentfulService) { }

  ngOnInit() {
    this.content$ = this.contentful.getContent('5jn8cwdxZ6eSAKcEuuyEGE');
  }

}
