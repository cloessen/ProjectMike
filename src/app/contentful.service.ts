import { Injectable } from '@angular/core';

import * as contentful from 'contentful';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { map } from 'rxjs/operators';

import * as marked from 'marked';

export const CONTENT_TYPES = {
  blogPost: 'post',
  page: 'page'
};

@Injectable()
export class ContentfulService {
  private client = contentful.createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  });

  constructor() { }

  logContent() {
    this.client
      .getEntries({ limit: 10, content_type: CONTENT_TYPES.blogPost })
      .then(entries => console.log(entries));
  }
  getAllBlogPosts() {
    const promise = this.client.getEntries({ limit: 10, content_type: CONTENT_TYPES.blogPost });
    return Observable.fromPromise(promise).pipe(map(entry => entry.items));
  }

  getContent(contentId) {
    // const promise = this.client.getEntry(contentId);
    // return Observable.fromPromise(promise);
  }

  markdownToHtml(md: string) {
    return marked(md);
  }
}
