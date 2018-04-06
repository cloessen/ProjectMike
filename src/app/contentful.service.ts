import { Injectable } from '@angular/core';

import * as contentful from 'contentful';
import { environment} from '../environments/environment';
import {Observable} from 'rxjs/Observable';
import * as marked from 'marked';

@Injectable()
export class ContentfulService {

  private client = contentful.createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  });

  constructor() { }

  logContent() {
    this.client.getEntries()
      .then(entries => entries.items.forEach(entry => console.log(entry.fields)));
  }

  getContent(contentId) {
    const promise = this.client.getEntry(contentId);
    return Observable.fromPromise(promise).map(entry => entry.fields);
  }

  markdownToHtml(md: string) {
    return marked(md);
  }
}
