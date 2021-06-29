import React, { useContext, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { CommentContext } from "../../store/contexts/CommentContext";
import { PostContext } from "../../store/contexts/PostContext";
import LoadingDualRing from "../LoadingDualRing";
import PostCard from "../PostCard";
import messages from "../PostCard/messages";

export default function PostList() {
    const { postState, postActions } = useContext(PostContext);
    const { commentState, commentActions } = useContext(CommentContext);

    useEffect(() => {
        if (postState.items.length === 0) postActions.request();
        if (commentState.items.length === 0) commentActions.request();
    }, []);

    if (postState.isFetching) {
        return <LoadingDualRing />;
    }

    return (
        <div>
            <h1>
                <FormattedMessage {...messages.postList} />
            </h1>
            {postState.items.map((item, index) => {
                return <PostCard key={index} post={item} />;
            })}
        </div>
    );
}
