import { Dispatch } from "react";
import { customFetch } from "../../services";
import { COMMENTS_ENDPOINT } from "../../services/restApiEndpoint";
import { actionFetchInvalid, actionReceive, actionRequest } from "../actions/comment";
import { CommentTypes, REQUEST_COMMENTS } from "../types/comment";

export const applyMiddleware = (dispatch: Dispatch<CommentTypes>) => (action: CommentTypes) => {
    switch (action.type) {
        case REQUEST_COMMENTS:
            dispatch(actionRequest());
            return customFetch.get(
                COMMENTS_ENDPOINT,
                (success) => {
                    dispatch(actionReceive(success.data));
                },
                (error) => {
                    dispatch(actionFetchInvalid(error));
                }
            );
        default:
            dispatch(action);
    }
};
