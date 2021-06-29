import { Dispatch } from "react";
import { customFetch } from "../../services";
import { POST_ENDPONT } from "../../services/restApiEndpoint";
import { actionFetchInvalid, actionReceive, actionRequest } from "../actions/post";
import { PostTypes, REQUEST_POSTS } from "../types/post";

export const applyMiddleware = (dispatch: Dispatch<PostTypes>) => (action: PostTypes) => {
    switch (action.type) {
        case REQUEST_POSTS:
            dispatch(actionRequest());
            return customFetch.get(
                POST_ENDPONT,
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
