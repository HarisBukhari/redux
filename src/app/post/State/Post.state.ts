import { Post } from "src/app/Models/Post.model";


export interface PostState {
    Posts: Post[];
    Login: {};
}

export const initialState: PostState = {
    Posts: [
        {
            id: 12,
            title: "string",
            content: "string",
            author: "string",
            tags: ["77", "123", "12345",],
            comments: ["amnsmnamns", "aamncmsnmc", "njajbsbas", "nbansbas", "ansbnbans", "hbahsbhas"],
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
            tags: ["12", "12345", "4545",],
            comments: ["loream", "ansnas", "kaksj", "ajsas", "njnbajshas", "absjbajshb"],
            date: new Date,
            likes: 50,
            liked: true,
            commentsCount: 25,
        },
    ],
    Login: {}
};