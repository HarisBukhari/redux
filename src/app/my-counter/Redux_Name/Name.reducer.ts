import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './Name.actions';
import { initialState } from './Name.state';


const _counterReducer = createReducer(initialState,
  on(increment, state => {
    return {
      ...state,
      num: state.num + 1
    }
  }),
  on(decrement, state =>{
    return {
      ...state,
      num: state.num - 1
    }
  }),
  on(reset, state => {
    return {
      ...state,
      num: 0
    }
  }),
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}