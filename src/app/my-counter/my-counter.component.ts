import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset, chageName } from '../Redux_Name/Name.actions';
import { getCounter, getName } from '../Redux_Name/Name.selectors';
import { CounterState } from '../Redux_Name/Name.state';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})

export class MyCounterComponent {

  count$: Observable<number>;
  name$: Observable<string>;
  nameRef: string="404"
 
  constructor(private store: Store<{ count: CounterState }>) {
    //i Removing the interface from the constructor 
    // this.count$ = store.select('count')
    // this.name$ = store.select('count')
    // store.select('count').subscribe(count => {
    //   this.name = count.name
    // })
      this.count$ = store.select(getCounter)
      this.name$ = store.select(getName)
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
