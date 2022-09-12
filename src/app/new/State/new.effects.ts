import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { getjobs, jobsApi } from './new.action';
import { DataService } from 'src/app/Service/data.service';

@Injectable()

export class NewEffects {
  constructor(private actions$: Actions, private data: DataService) { }
  jobs$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(jobsApi),
      exhaustMap((action) => {
        return this.data.check(action.id).pipe(
          map((data) => {
            data = this.data.formatJob(data)
            return getjobs({data})
          })
        );
      })
    );
  });
}  