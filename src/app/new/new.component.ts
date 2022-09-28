import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { jobs } from '../Models/jobs.model';
import { appState } from '../store/app.state';
import { updateSpinner } from '../store/shared/shared.actions';
import { addJob, jobsApi, updateJob } from './State/new.action';
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
   }

  ngOnInit(): void {
    const job: jobs  = {
      company: "New",
      position: "string",
      author: "string",
      status: "string",
      description: "string",
      creadtedBy: "string",
      id:2
  }
    this.store.dispatch(addJob({ job }))
  }

  check(){
    const id = "62dc2ab3cd412946f4c575af"
    this.store.dispatch(jobsApi({ id }));
  }


}
