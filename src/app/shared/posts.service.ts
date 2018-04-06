import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Post } from './interfaces';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostsService {
  private postsCollection: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;

  constructor(private db: AngularFirestore) {
    this.postsCollection = db.collection<Post>('posts');
    this.posts = this.postsCollection.valueChanges();
  }

  fetchAllPosts() {
    return this.posts;
  }

}
