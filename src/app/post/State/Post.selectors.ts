import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostState } from "./Post.state";


const getNameState = createFeatureSelector<PostState>('posts')

export const getPosts = createSelector(getNameState, state=>{
    return state.Posts
})
