import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/Models/Post.model';

export const ADD_POST_ACTION = '[post page] add post';

export const addPost = createAction(ADD_POST_ACTION, props<{ post: Post}>());


// export const decrement = createAction('Decrement');
// export const reset = createAction('Reset');
// export const addVal = createAction('AddVal',props<{value:number}>());
// export const chageName = createAction('ChageName',props<{name:string}>());