import { createFeatureSelector, createSelector } from "@ngrx/store";
import { sharedState } from "../shared/shared.state";
export const stateName = "spinner";


const getSpinnerState = createFeatureSelector<sharedState>(stateName)

export const getSpinner = createSelector(getSpinnerState, state=>{
    return state.spinner
})
