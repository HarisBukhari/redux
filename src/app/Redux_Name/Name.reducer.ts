import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, addVal } from './Name.actions';
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
  on(addVal, (state,action) => {
    return {
      ...state,
      num: state.num+action.value
    }
  }),
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}