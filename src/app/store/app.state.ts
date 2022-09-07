import { postReducer } from "../post/State/Post.reducer";
import { PostState } from "../post/State/Post.state";
import { counterReducer } from "../Redux_Name/Name.reducer";
import { CounterState } from "../Redux_Name/Name.state";

export interface appState {
    count: CounterState,
    posts: PostState,
}

export const appReducer = {
    count: counterReducer,
    posts: postReducer,
}