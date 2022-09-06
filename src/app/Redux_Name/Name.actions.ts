import { createAction, props } from '@ngrx/store';

export const increment = createAction('Increment');
export const decrement = createAction('Decrement');
export const reset = createAction('Reset');
export const addVal = createAction('AddVal',props<{value:number}>());
export const chageName = createAction('ChageName',props<{name:string}>());