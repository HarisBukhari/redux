import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { loginStart, loginSucess } from './Post.action';
import { DataService } from 'src/app/Service/data.service';

@Injectable()

export class AuthEffects {
    constructor(private actions$: Actions, private data: DataService) { }
    login$ = createEffect((): any => {
        return this.actions$.pipe(
          ofType(loginStart),
          exhaustMap((action) => {
            return this.data.login(action.email, action.password).pipe(
              map((data) => {
                console.log(data)
                const user = this.data.formatUser(data)
                console.log(user)
                return loginSucess({user});
              })
            );
          })
        );
      });
} 