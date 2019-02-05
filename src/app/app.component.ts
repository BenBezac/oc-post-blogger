import { Post } from './post';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Array<Post> = [];

  constructor() {
    this.posts.push(new Post(
      'Mon premier Post',
      // tslint:disable-next-line:max-line-length
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis vitae tellus eu placerat. Cras libero nulla, ullamcorper volutpat.',
       3, null
    ));

    this.posts.push(new Post(
      'Mon Second Post',
      // tslint:disable-next-line:max-line-length
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis vitae tellus eu placerat. Cras libero nulla, ullamcorper volutpat.',
      -8, null
    ));

    this.posts.push(new Post(
      'Mon Troisième Post',
      // tslint:disable-next-line:max-line-length
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis vitae tellus eu placerat. Cras libero nulla, ullamcorper volutpat.',
      0, null
    ));
  }
}
