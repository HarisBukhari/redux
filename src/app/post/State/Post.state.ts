import { Post } from "src/app/Models/Post.model";


export interface PostState {
    Posts: Post[];
}

export const initialState: PostState = {
    Posts: [
        {
            id: 12,
            title: "string",
            content: "string",
            author: "string",
            tags: ["77", "123", "12345",],
            comments: ["logging", "logging", "logging", "logging", "logging", "logging"],
            date: new Date,
            likes: 5,
            liked: false,
            commentsCount: 15,
        },
        {
            id: 13,
            title: "string",
            content: "string",
            author: "string",
            tags: ["77", "123", "12345",],
            comments: ["logging", "logging", "logging", "logging", "logging", "logging"],
            date: new Date,
            likes: 50,
            liked: true,
            commentsCount: 25,
        },
    ]
};