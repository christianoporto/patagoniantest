import { Dispatch } from "react";
import {
    AddComment,
    ADD_COMMENT,
    CommentTypes,
    IComment,
    ICommentState,
    InvalidRequest,
    INVALID_REQUEST_COMMENTS,
    ReceiveComments,
    RECEIVE_COMMENTS,
    RequestComments,
    REQUEST_COMMENTS,
    UpdateComment,
    UPDATE_COMMENT,
} from "../types/comment";

export interface ICommentActions {
    request: () => void;
    receive: (items: IComment[]) => void;
    fetchInvalid: (error: any) => void;
    add: (comment: IComment) => void;
    update: (comment: IComment) => void;
}

export const actionRequest = (): RequestComments => {
    return {
        type: REQUEST_COMMENTS,
    };
};

export const actionReceive = (items: IComment[]): ReceiveComments => {
    return {
        type: RECEIVE_COMMENTS,
        items,
    };
};

export const actionFetchInvalid = (er: any): InvalidRequest => {
    return {
        type: INVALID_REQUEST_COMMENTS,
        value: er,
    };
};

export const ActionAdd = (comment: IComment): AddComment => {
    return {
        type: ADD_COMMENT,
        value: comment,
    };
};

export const ActionUpdate = (comment: IComment): UpdateComment => {
    return {
        type: UPDATE_COMMENT,
        value: comment,
    };
};

export const useActions = (state: ICommentState, dispatch: Dispatch<CommentTypes>): ICommentActions => ({
    request: () => {
        dispatch(actionRequest());
    },
    receive: (items: IComment[]) => {
        dispatch(actionReceive(items));
    },
    fetchInvalid: (error: any) => {
        dispatch(actionFetchInvalid(error));
    },
    add: (value: IComment) => {
        dispatch(ActionAdd(value));
    },
    update: (value: IComment) => {
        dispatch(ActionUpdate(value));
    },
});
