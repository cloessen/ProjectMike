import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../shared/posts.service';
import { Observable } from 'rxjs/Observable';
import { Post } from '../../shared/interfaces';

@Component({
  selector: 'app-new-post',
  templateUrl: './admin-post.component.html',
  styleUrls: ['./admin-post.component.scss']
})
export class AdminPostComponent implements OnInit {

  posts$: Observable<Post[]>;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.posts$ = this.postsService.fetchAllPosts();
  }

}
