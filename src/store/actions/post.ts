import { Dispatch } from "react";
import {
    AddPost,
    ADD_POST,
    PostTypes,
    IPost,
    IPostState,
    InvalidRequest,
    INVALID_REQUEST_POSTS,
    ReceivePosts,
    RECEIVE_POSTS,
    RequestPosts,
    REQUEST_POSTS,
    UpdatePost,
    UPDATE_POST,
} from "../types/post";

export interface IPostActions {
    request: () => void;
    receive: (items: IPost[]) => void;
    fetchInvalid: (error: any) => void;
    add: (post: IPost) => void;
    update: (post: IPost) => void;
}

export const actionRequest = (): RequestPosts => {
    return {
        type: REQUEST_POSTS,
    };
};

export const actionReceive = (items: IPost[]): ReceivePosts => {
    return {
        type: RECEIVE_POSTS,
        items,
    };
};

export const actionFetchInvalid = (er: any): InvalidRequest => {
    return {
        type: INVALID_REQUEST_POSTS,
        value: er,
    };
};

export const ActionAdd = (post: IPost): AddPost => {
    return {
        type: ADD_POST,
        value: post,
    };
};

export const ActionUpdate = (post: IPost): UpdatePost => {
    return {
        type: UPDATE_POST,
        value: post,
    };
};

export const useActions = (state: IPostState, dispatch: Dispatch<PostTypes>): IPostActions => ({
    request: () => {
        dispatch(actionRequest());
    },
    receive: (items: IPost[]) => {
        dispatch(actionReceive(items));
    },
    fetchInvalid: (error: any) => {
        dispatch(actionFetchInvalid(error));
    },
    add: (value: IPost) => {
        dispatch(ActionAdd(value));
    },
    update: (value: IPost) => {
        dispatch(ActionUpdate(value));
    },
});
