import { createReducer, on } from "@ngrx/store";
import { addPost } from "./Post.action";
import { initialState } from "./Post.state";

const _postReducer = createReducer(initialState,
    on(addPost, (state, action) => {
        let post = {...action.post}
        return {
            ...state,
            Posts: [...state.Posts,post]
        }
    })
)

export function postReducer(state, action) {
    return _postReducer(state, action);
} 