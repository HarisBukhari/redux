import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./Name.state";



const getNameState = createFeatureSelector<CounterState>('count')

export const getCounter = createSelector(getNameState, state => {
    return state.num;
})

export const getName = createSelector(getNameState, state => {
    return state.name;
})