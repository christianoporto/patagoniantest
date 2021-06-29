import { getStoredData, StoreKey } from "..";
import { ADD_COMMENT, CommentTypes, IComment, ICommentState, INVALID_REQUEST_COMMENTS, RECEIVE_COMMENTS, REQUEST_COMMENTS, UPDATE_COMMENT } from "../types/comment";

export class InitStateBase implements ICommentState {
    items: IComment[] = [];
    error: any = undefined;
    isFetching: boolean = false;
    isError: boolean = false;
}

export const initState = getStoredData<ICommentState>(new InitStateBase(), StoreKey.comment);

export const commentReducer = (state: ICommentState, action: CommentTypes): ICommentState => {
    switch (action.type) {
        case ADD_COMMENT:
            return {
                ...state,
                items: [...state.items, action.value],
            };
        case UPDATE_COMMENT:
            let newlist: IComment[] = [];

            state.items.forEach((item) => {
                if (item.id === action.value.id) {
                    newlist.push(action.value);
                } else {
                    newlist.push(item);
                }
            });

            return {
                ...state,
                items: newlist,
            };
        case RECEIVE_COMMENTS:
            return {
                ...state,
                isFetching: false,
                isError: false,
                items: action.items,
            };
        case REQUEST_COMMENTS:
            return {
                ...state,
                isFetching: true,
                isError: false,
            };
        case INVALID_REQUEST_COMMENTS:
            return {
                ...state,
                isFetching: false,
                isError: true,
                error: action.value,
            };
        default:
            return state;
    }
};
