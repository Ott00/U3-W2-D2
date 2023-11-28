import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-inactive-posts-page',
  templateUrl: './inactive-posts-page.component.html',
  styleUrls: ['./inactive-posts-page.component.scss'],
})
export class InactivePostsPageComponent implements OnInit {
  posts: Post[] = [];
  constructor(private getService: PostsService) {
    this.getService.getPosts().then((posts) => {
      posts.forEach((post: any) => {
        if (post.active === false) {
          this.posts.push(post);
        }
      });
      // console.log(this.posts);
    });
  }

  ngOnInit(): void {}
}
