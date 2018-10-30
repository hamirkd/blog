import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './views/post-list/post-list.component';
import { NewPostComponent } from './views/new-post/new-post.component';


const routes: Routes = [
  {
    path: 'posts',
    component:PostListComponent,
    data: {
        title: 'La liste des posts'
        }
    },
    {
      path: 'newpost',
      component:NewPostComponent,
      data: {
          title: 'Nouveau post'
          }
      },
      { path: '**', redirectTo: 'posts' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
