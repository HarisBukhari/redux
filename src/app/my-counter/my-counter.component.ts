import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset, chageName } from '../Redux_Name/Name.actions';
import { CounterState } from '../Redux_Name/Name.state';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})

export class MyCounterComponent {

  count$: Observable<{num: number}>;
  name: string="404"
  nameRef: string="404"
 
  constructor(private store: Store<{ count: CounterState }>) {
    //i Removing the interface from the constructor 
    this.count$ = store.select('count')
    store.select('count').subscribe(count => {
      this.name = count.name
    })
  }
 
  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }

  add(){
    this.store.dispatch(chageName({name: this.nameRef}))
  }

} 
