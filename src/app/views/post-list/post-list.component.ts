import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostproviderService } from 'src/app/provider/postprovider.service';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { config } from '../../configs/app.config';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Observable<Post[]>;

  constructor(private postprovider:PostproviderService) { }

  ngOnInit() {
    this.posts=this.postprovider.posts;    
  }

}
