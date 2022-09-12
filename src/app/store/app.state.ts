import { postReducer } from "../post/State/Post.reducer";
import { PostState } from "../post/State/Post.state";
import { counterReducer } from "../Redux_Name/Name.reducer";
import { CounterState } from "../Redux_Name/Name.state";
import { JobState } from "../new/State/new.state";
import { jobReducer } from "../new/State/new.reducer";

export interface appState {
    count: CounterState,
    posts: PostState,
    jobs: JobState
}

export const appReducer = {
    count: counterReducer,
    posts: postReducer,
    jobs: jobReducer
}