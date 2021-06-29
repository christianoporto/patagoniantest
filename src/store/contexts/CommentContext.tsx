import React, { createContext, useReducer, useEffect } from "react";

import { applyMiddleware } from "../middlewares/comment";
import { ICommentActions, useActions } from "../actions/comment";
import { initState, commentReducer } from "../reducers/comment";
import { saveData, StoreKey } from "..";
import { ICommentState } from "../types/comment";

interface IContextProps {
    commentState: ICommentState;
    commentActions: ICommentActions;
}

export const CommentContext = createContext({} as IContextProps);

const CommentContextProvider = (props: any) => {
    const [commentState, dispatch] = useReducer(commentReducer, initState);
    useEffect(() => {
        saveData(StoreKey.comment, commentState);
    }, [commentState]);

    const commentActions = useActions(commentState, applyMiddleware(dispatch));

    return <CommentContext.Provider value={{ commentState, commentActions }}>{props.children}</CommentContext.Provider>;
};

export default CommentContextProvider;
