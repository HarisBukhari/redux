import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../my-counter/Redux_Name/Name.actions';
import { CounterState } from './Redux_Name/Name.state';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent {

  count$: Observable<{num:number}>;
  count:number
 
  constructor(private store: Store<{ count: CounterState }>) {
    this.count$ = store.select('count')
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

}
