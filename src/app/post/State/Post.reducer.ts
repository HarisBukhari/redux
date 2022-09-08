import { createReducer, on } from "@ngrx/store";
import { addPost, deletePost, updatePost } from "./Post.action";
import { initialState } from "./Post.state";

const _postReducer = createReducer(initialState,
    on(addPost, (state, action) => {
        let post = { ...action.post }
        return {
            ...state,
            Posts: [...state.Posts, post]
        }
    }),
    on(updatePost, (state, action) => {
        const updatedPosts = state.Posts.map(post => {
            return action.post.id === post.id ? action.post : post
        })
        return {
            ...state,
            Posts: updatedPosts
        }
    }),
    on(deletePost, (state, action) => {
        const updatedPosts = state.Posts.filter(post => {
            return action.id !== post.id
        })
        return {
            ...state,
            Posts: updatedPosts
        }
    })

)

export function postReducer(state, action) {
    return _postReducer(state, action);
} 