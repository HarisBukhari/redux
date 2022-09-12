import { createReducer } from "@ngrx/store";
import { initialState } from "src/app/new/State/new.state";


const _jobReducer = createReducer(initialState,
    
)


export function jobReducer(state, action) {
    return _jobReducer(state, action);
} 