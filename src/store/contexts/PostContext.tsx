import React, { createContext, useReducer, useEffect } from "react";

import { applyMiddleware } from "../middlewares/post";
import { IPostActions, useActions } from "../actions/post";
import { initState, postReducer } from "../reducers/post";
import { saveData, StoreKey } from "..";
import { IPostState } from "../types/post";

interface IContextProps {
    postState: IPostState;
    postActions: IPostActions;
}

export const PostContext = createContext({} as IContextProps);

const PostContextProvider = (props: any) => {
    const [postState, dispatch] = useReducer(postReducer, initState);
    useEffect(() => {
        saveData(StoreKey.post, postState);
    }, [postState]);

    const postActions = useActions(postState, applyMiddleware(dispatch));

    return <PostContext.Provider value={{ postState, postActions }}>{props.children}</PostContext.Provider>;
};

export default PostContextProvider;
