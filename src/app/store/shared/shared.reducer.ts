import { createReducer, on } from "@ngrx/store"
import { updateSpinner } from "./shared.actions";
import { initialState } from "./shared.state";

const _getSpinner = createReducer(initialState,
    on(updateSpinner, (state, action) => {
        return {
            ...state,
            spinner: action.spinner
        }
    }),
)


export function getSpinner(state, action) {
    return _getSpinner(state, action);
} 