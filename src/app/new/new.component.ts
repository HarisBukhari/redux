import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { jobs } from '../Models/jobs.model';
import { appState } from '../store/app.state';
import { getJobs } from './State/new.selector';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  jobs$: Observable<jobs[]>


  constructor(private store: Store<appState>) {
    this.jobs$ = store.select(getJobs);
    this.jobs$.subscribe(jobs => console.log(jobs));
   }

  ngOnInit(): void {
  }

}
