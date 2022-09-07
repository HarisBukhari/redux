export interface Post {
    id: number;
    title: string;
    content: string;
    author: string;
    tags: string[];
    comments: string[];
    date: Date;
    likes: number;
    liked: boolean;
    commentsCount: number;
}