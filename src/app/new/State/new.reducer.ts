import { createReducer, on } from "@ngrx/store";
import { initialState } from "src/app/new/State/new.state";
import { addJob, deleteJob, getjobs, jobsApi, updateJob } from "./new.action";


const _jobReducer = createReducer(initialState,
    on(addJob, (state, action) => {
        let job = { ...action.job }
        return {
            ...state,
            jobs: [...state.jobs, job]
        }
    }),
    on(updateJob, (state, action) => {
        const updatedjobs = state.jobs.map(jobs => {
            return action.job.id === jobs.id ? action.job : jobs
        })
        return {
            ...state,
            jobs: updatedjobs
        }
    }),
    on(deleteJob, (state, action) => {
        const updatedjobs = state.jobs.filter(jobs => {
            return action.id !== jobs.id
        })
        return {
            ...state,
            jobs: updatedjobs
        }
    }),
    on(getjobs, (state, action) => {
        let job = { ...action.data }
        return {
            ...state,
            jobs: [...state.jobs, job]
        }
    })
)


export function jobReducer(state, action) {
    return _jobReducer(state, action);
} 