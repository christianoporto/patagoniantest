import { getStoredData, StoreKey } from "..";
import {
    ADD_POST,
    PostTypes,
    IPost,
    IPostState,
    INVALID_REQUEST_POSTS,
    RECEIVE_POSTS,
    REQUEST_POSTS,
    UPDATE_POST,
} from "../types/post";

export class InitStateBase implements IPostState {
    items: IPost[] = [];
    error: any = undefined;
    isFetching: boolean = false;
    isError: boolean = false;
}

export const initState = getStoredData<IPostState>(new InitStateBase(), StoreKey.post);

export const postReducer = (state: IPostState, action: PostTypes): IPostState => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                items: [...state.items, action.value],
            };
        case UPDATE_POST:
            let newlist: IPost[] = [];

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
        case RECEIVE_POSTS:
            return {
                ...state,
                isFetching: false,
                isError: false,
                items: action.items,
            };
        case REQUEST_POSTS:
            return {
                ...state,
                isFetching: true,
                isError: false,
            };
        case INVALID_REQUEST_POSTS:
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
