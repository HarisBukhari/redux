import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { appReducer } from '../store/app.state';
import { postReducer } from './State/Post.reducer';

const routes: Routes = [
  { path: '', component: PostListComponent },
];

@NgModule({
  declarations: [
    PostListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('posts', postReducer),
  ]
})
export class PostModule { }
