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
  A: String[]

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

  onSubmit() {
    // console.log(this.ReactiveForm)
    const post: Post = {
      id: this.ReactiveForm.value.Post.id,
      title: this.ReactiveForm.value.Post.title,
      content: this.ReactiveForm.value.Post.content,
      author: this.ReactiveForm.value.Post.author,
      tags: (this.ReactiveForm.controls['tags'].value).map((value) => {
        return value.tag
      }),
      comments: (this.ReactiveForm.controls['comments'].value).map((value) => {
        return value.comment
      }),
      date: this.ReactiveForm.value.Post.date,
      likes: this.ReactiveForm.value.Post.likes,
      liked: this.ReactiveForm.value.Post.liked,
      commentsCount: this.ReactiveForm.value.Post.commentsCount
    }
    console.log(post)
  }

}

