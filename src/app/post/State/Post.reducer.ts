import { createReducer } from "@ngrx/store";
import { initialState } from "./Post.state";

const _postReducer = createReducer(initialState,
    // on(getPosts, state=> {

    // })
)

export function postReducer(state, action) {
    return _postReducer(state, action);
} 