import { createFeatureSelector, createSelector } from "@ngrx/store";
import { JobState } from "../State/new.state";


const getNameState = createFeatureSelector<JobState>('jobs')

export const getJobs = createSelector(getNameState, state=>{
    return state.jobs
})
