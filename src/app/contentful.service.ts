import { Injectable } from '@angular/core';

import * as contentful from 'contentful';
import { environment} from '../environments/environment';
import {Observable} from 'rxjs/Observable';
import * as marked from 'marked';

export const CONTENT_TYPES = {
  blogPost: 'blogPost',
  page: 'page'
}

@Injectable()
export class ContentfulService {



  private client = contentful.createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  });

  constructor() { }

  logContent() {
    this.client.getEntries({'limit': 10, content_type: CONTENT_TYPES.blogPost})
      .then(entries => console.log(entries));
  }

  getContent(contentId) {
    const promise = this.client.getEntry(contentId);
    return Observable.fromPromise(promise).map(entry => entry.fields);
  }

  markdownToHtml(md: string) {
    return marked(md);
  }
}
