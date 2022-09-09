import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appState } from 'src/app/store/app.state';
import { Post } from '../../Models/Post.model'
import { addPost, deletePost, loginStart, updatePost } from '../State/Post.action';
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
  isEdit: boolean = false
  post: Post

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
      login: new FormGroup({
        email: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required),
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

  addpost() {
    this.isEdit = false
    this.reset()
  }

  reset() {
    this.ReactiveForm.reset()
    this.clearFormArray(<FormArray>this.ReactiveForm.get('tags'))
    this.clearFormArray(<FormArray>this.ReactiveForm.get('comments'))
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

  fetchPost() {
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
    return post
  }

  onSubmit() {
    this.ReactiveForm.reset(this.ReactiveForm.value)
    const post = this.fetchPost()
    this.store.dispatch(addPost({ post }))
    this.reset()
  }

  convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  showData(id: number) {
    this.isEdit = true;
    this.reset()
    let post: Post = this.data.find(function (e) {
      return e.id == id;
    })

    post.tags.forEach(element => {
      (<FormArray>this.ReactiveForm.get('tags')).push(new FormGroup({
        tag: new FormControl(element),
      }))
    })

    post.comments.forEach(element => {
      (<FormArray>this.ReactiveForm.get('comments')).push(new FormGroup({
        comment: new FormControl(element),
      }))
    })

    this.ReactiveForm.patchValue({
      Post: {
        id: post.id,
        title: post.title,
        content: post.content,
        author: post.author,
        date: this.convert(post.date),
        likes: post.likes,
        liked: post.liked,
        commentsCount: post.commentsCount,
      },
      tags: [...post.tags],
      comments: [...post.comments]
    })
    this.post = post
  }

  update() {
    this.ReactiveForm.reset(this.ReactiveForm.value)
    const post = this.fetchPost()
    this.store.dispatch(updatePost({ post }));
  }

  delete(id: number) {
    this.store.dispatch(deletePost({ id }));
  }

  login() {
    const email = this.ReactiveForm.value.login.email
    const password = this.ReactiveForm.value.login.password
    this.store.dispatch(loginStart({ email, password }));
  }

}