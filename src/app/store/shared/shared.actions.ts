import { createAction, props } from "@ngrx/store";


export const GET_SPINNER = 'get spinner';


export const updateSpinner = createAction(GET_SPINNER, props<{ spinner: boolean}>());