import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appState } from 'src/app/store/app.state';
import { Post } from '../../Models/Post.model'
import { addPost } from '../State/Post.action';
import { getPosts } from '../State/Post.selectors';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  ReactiveForm: FormGroup;
  posts$: Observable<Post[]>
  data: Post[]
  A: String[]

  constructor(private store: Store<appState>) {
    this.posts$ = store.select(getPosts);
    this.posts$.subscribe(data => {
      this.data = data;
    })
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

  clearFormArray = (formArray: FormArray) => {
    while (formArray.length !== 0) {
      formArray.removeAt(0)
    }
  }

  reset() {
    this.ReactiveForm.reset()
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
    this.ReactiveForm.reset(this.ReactiveForm.value)
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
    this.store.dispatch(addPost({ post }))
    this.reset()
  }
  
  convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  edit(id: number) {
    this.reset()
    let post = this.data.filter(function (e) {
      return e.id == id;
    })
    this.clearFormArray(<FormArray>this.ReactiveForm.get('tags'))
    this.clearFormArray(<FormArray>this.ReactiveForm.get('comments'))
    post[0].tags.forEach(element => {
      (<FormArray>this.ReactiveForm.get('tags')).push(new FormGroup({
        tag: new FormControl(element),
      }))
    })
    post[0].comments.forEach(element => {
      (<FormArray>this.ReactiveForm.get('comments')).push(new FormGroup({
        comment: new FormControl(element),
      }))
    })
    this.ReactiveForm.patchValue({
      Post:{
        id:post[0].id,
        title: post[0].title,
        content: post[0].content,
        author: post[0].author,
        date: this.convert(post[0].date),
        likes: post[0].likes,
        liked: post[0].liked,
        commentsCount: post[0].commentsCount,
      },
      tags:[
        ...post[0].tags
      ],
      comments:[
        ...post[0].comments
      ]
    })
    console.log(post[0].tags)
    console.log(this.ReactiveForm)

  }

  delete(id: number) {
    alert(id)
  }

}

