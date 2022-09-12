import { createAction, props } from "@ngrx/store";
import { jobs } from "src/app/Models/jobs.model";

export const ADD_JOB_ACTION = 'add job';
export const UPDATE_JOB_ACTION = 'update job';
export const DELETE_JOB_ACTION = 'delete job';


export const JOBS_API = 'jobs api';
export const GET_JOBS = 'get jobs';


export const addJob = createAction(ADD_JOB_ACTION, props<{ job: jobs}>());
export const updateJob = createAction(UPDATE_JOB_ACTION, props<{ job: jobs}>());
export const deleteJob = createAction( DELETE_JOB_ACTION, props<{ id: number}>());
export const jobsApi = createAction( JOBS_API, props<{ id: string}>());
export const getjobs = createAction(GET_JOBS, props<{ data: any}>());
