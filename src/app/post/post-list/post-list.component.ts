import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appState } from 'src/app/store/app.state';
import { Post } from '../../Models/Post.model'
import { getPosts } from '../State/Post.selectors';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  ReactiveForm: FormGroup;
  posts$: Observable<Post[]>

  constructor(private store: Store<appState>) {
    this.posts$ = store.select(getPosts);

  }

  ngOnInit(): void {
    this.ReactiveForm = new FormGroup({
      Post: new FormGroup({
        id: new FormControl(null, Validators.required),
        title: new FormControl(null, Validators.required),
        content: new FormControl(null, Validators.required),
        author: new FormControl(null, Validators.required),
        date: new FormControl(null, Validators.required),
        likes: new FormControl(null, Validators.required),
        liked: new FormControl(null, Validators.required),
        commentsCount: new FormControl(null, Validators.required),
      }),
      tags: new FormArray([]),
      comments: new FormArray([]),
    })

  }

  addTags() {
    (<FormArray>this.ReactiveForm.get('tags')).push(new FormGroup({
      tag: new FormControl(""),
    }))
  }

  addComments() {
    (<FormArray>this.ReactiveForm.get('comments')).push(new FormGroup({
      comment: new FormControl(""),
    }))
  }

  deleteTag(tagNum: number) {
    (<FormArray>this.ReactiveForm.get('tags')).removeAt(tagNum)
  }

  deleteComment(commentNum: number) {
    (<FormArray>this.ReactiveForm.get('comments')).removeAt(commentNum)
  }

  show() {
    console.log("clicked")
  }

  onSubmit() {
    console.log(this.ReactiveForm)
  }

}

