import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts:Post[]=[];
  constructor() { }

  ngOnInit() {
    this.posts=[];
    this.posts.push(new Post("Mon premier post","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut augue elit. Vestibulum diam purus, bibendum eu commodo a, finibus vitae nisl. Etiam maximus diam id magna consectetur, quis ",1));
    this.posts.push(new Post("Mon deuxième post","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut augue elit. Vestibulum diam purus, bibendum eu commodo a, finibus vitae nisl. Etiam maximus diam id magna consectetur, quis ",-1));
    this.posts.push(new Post("Encore un post","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut augue elit. Vestibulum diam purus, bibendum eu commodo a, finibus vitae nisl. Etiam maximus diam id magna consectetur, quis ",0));
  }

}
