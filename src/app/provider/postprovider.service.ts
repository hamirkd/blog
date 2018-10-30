import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PostproviderService {

  localPost:Post[];
  posts: Observable<Post[]>;
  postscollection: AngularFirestoreCollection<Post>;
  postDoc: AngularFirestoreDocument<Post>;
  constructor(private db: AngularFirestore){ 
    this.posts = this.db.collection('posts').valueChanges() as Observable<Post[]>;
    this.postscollection = this.db.collection('posts', x => x.orderBy('created_at', 'asc'));
    
    this.posts = this.postscollection.snapshotChanges().pipe(map(
      changes => {
        return changes.map(
          a => {
            const data = a.payload.doc.data() as Post;
            data.$key = a.payload.doc.id;
            return data;
          });
        }
    ));
}
  ngOnInit(){
    console.log("execute")
  }

  addPost(post:Post){
    this.db.collection('posts').add({...post});
  }
  deletePost(post:Post){
    console.log(post.$key);
    this.postDoc = this.db.doc(`posts/${post.$key}`);
  this.postDoc.delete();
  }
  
  getPost(){
    this.postscollection=this.db.collection('posts');
    console.log(this.postscollection);
  }
  update(post:Post){
    this.postDoc = this.db.doc(`posts/${post.$key}`);
    this.postDoc.update(post);
  }
}
