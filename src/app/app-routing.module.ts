import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './views/post-list/post-list.component';


const routes: Routes = [
  {
    path: '',
    component:PostListComponent,
    data: {
        title: 'La liste des postes'
        }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
