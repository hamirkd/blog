import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostproviderService } from 'src/app/provider/postprovider.service';
import { DataSnapshot } from '@angular/fire/database/interfaces';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
  @Input() post:Post;
  @Input() p:any;
  @Input() index:string;
  constructor(private postprovider:PostproviderService) { 

  }

  ngOnInit() {
    console.log(this.post);
  }
  loveit(){
    this.post.loveIts++;
    this.postprovider.update(this.post);
  }
  dontloveit(){
    this.post.loveIts--;
    this.postprovider.update(this.post);
  }
  delete(){
    this.postprovider.deletePost(this.post);
    console.log("delete it !",this.post.$key);
  }

}
