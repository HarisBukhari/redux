import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addVal } from '../Redux_Name/Name.actions';
import { CounterState } from '../Redux_Name/Name.state';

@Component({
  selector: 'app-add-custom-val',
  templateUrl: './add-custom-val.component.html',
  styleUrls: ['./add-custom-val.component.css']
})
export class AddCustomValComponent implements OnInit {

  value: number
  constructor(private store: Store<{ count: {num:number} }>) { }

  ngOnInit(): void {
  }

  add() {
    this.store.dispatch(addVal({ value: +this.value })) //add + before variable to make it number
  }

}
