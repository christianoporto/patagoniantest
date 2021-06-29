export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const INVALID_REQUEST_POSTS = "INVALID_REQUEST_POSTS";

export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}
export class Post implements IPost {
    userId: number = 0;
    id: number = 0;
    title: string = "";
    body: string = "";
}

export interface IPostState {
    items: IPost[];
    error: any;
    isFetching: boolean;
    isError: boolean;
}

export interface RequestPosts {
    type: typeof REQUEST_POSTS;
}
export interface ReceivePosts {
    type: typeof RECEIVE_POSTS;
    items: Array<IPost>;
}
export interface InvalidRequest {
    type: typeof INVALID_REQUEST_POSTS;
    value: any;
}
export interface UpdatePost {
    type: typeof UPDATE_POST;
    value: IPost;
}

export interface AddPost {
    type: typeof ADD_POST;
    value: IPost;
}

interface DeletePost {
    type: typeof DELETE_POST;
    id: string;
}

export type PostTypes = RequestPosts | ReceivePosts | InvalidRequest | UpdatePost | AddPost | DeletePost;
