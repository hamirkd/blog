import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostproviderService } from 'src/app/provider/postprovider.service';
import { Observable, Subscription } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { config } from '../../configs/app.config';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit,OnDestroy {

  posts: Observable<Post[]>;
  postsSubscription: Subscription;
  constructor(private postprovider:PostproviderService) { }

  ngOnInit() {
    this.posts=this.postprovider.posts;    
    this.postsSubscription=this.posts.subscribe();
  }
  ngOnDestroy(){
    this.postsSubscription.unsubscribe();
  }

}
