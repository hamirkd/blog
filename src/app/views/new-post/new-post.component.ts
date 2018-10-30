import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostproviderService } from 'src/app/provider/postprovider.service';
import { NgForm } from '@angular/forms';
import { Task } from 'src/app/models/app.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  newPost:Post=new Post();
  constructor(private postprovider:PostproviderService) {
    
    
    this.newPost.content="Quare hoc quidem praeceptum, cuiuscumque est, ad tollendam amicitiam valet; illud potius praecipiendum fuit, ut eam diligentiam adhiberemus in amicitiis";
  }

  ngOnInit() {
  }
  addPost(addForm:NgForm){
    this.newPost=new Post();
    this.newPost.title=addForm.form.value['title'];
    this.newPost.content=addForm.form.value['content'].replace(/(?:\r\n|\r|\n)/g, '<br>');
    this.newPost.created_at=new Date();
    this.postprovider.addPost(this.newPost);
    this.newPost=new Post();
  }

}
