export const ADD_COMMENT = "ADD_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const UPDATE_COMMENT = "UPDATE_COMMENT";
export const REQUEST_COMMENTS = "REQUEST_COMMENTS";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const INVALID_REQUEST_COMMENTS = "INVALID_REQUEST_COMMENTS";

export interface IComment {
    postId: number;
    id: number;
    name: string;
    body: string;
    email: string;
}
export class PostComment implements IComment {
    postId: number = 0;
    id: number = 0;
    name: string = "";
    body: string = "";
    email: string = "";

    constructor(postId: number) {
        this.postId = postId;
    }
}

export interface ICommentState {
    items: IComment[];
    error: any;
    isFetching: boolean;
    isError: boolean;
}

export interface RequestComments {
    type: typeof REQUEST_COMMENTS;
}
export interface ReceiveComments {
    type: typeof RECEIVE_COMMENTS;
    items: Array<IComment>;
}
export interface InvalidRequest {
    type: typeof INVALID_REQUEST_COMMENTS;
    value: any;
}
export interface UpdateComment {
    type: typeof UPDATE_COMMENT;
    value: IComment;
}

export interface AddComment {
    type: typeof ADD_COMMENT;
    value: IComment;
}

interface DeleteComment {
    type: typeof DELETE_COMMENT;
    id: string;
}

export type CommentTypes = RequestComments | ReceiveComments | InvalidRequest | UpdateComment | AddComment | DeleteComment;
