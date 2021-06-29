import React, { useContext, useState } from "react";
import { FormattedMessage } from "react-intl";
import { CommentContext } from "../../store/contexts/CommentContext";
import { IPost } from "../../store/types/post";
import CommentCard from "../CommentCard";
import CreateCommentForm from "../CreateCommentForm";
import messages from "./messages";
import { CardBody } from "./styled";

interface PostCardProps {
    post: IPost;
}

export default function PostCard({ post }: PostCardProps) {
    const [showComments, setShowComments] = useState(false);
    const { commentState } = useContext(CommentContext);
    return (
        <CardBody>
            <h3 className="title">{post.title}</h3>
            <p className="body">{post.body}</p>
            <hr />

            {showComments && (
                <div className="comments">
                    <div>
                        {commentState.items
                            .filter((x) => x.postId === post.id)
                            .map((item, index) => (
                                <CommentCard key={index} comment={item} />
                            ))}

                        <div>
                            <hr />
                            <CreateCommentForm postId={post.id} />
                            <hr />
                        </div>
                    </div>
                </div>
            )}
            <div>
                <button className="btn" onClick={() => setShowComments(!showComments)}>
                    <span className="wahioicon-comments"></span> {!showComments ? <FormattedMessage {...messages.showComments} /> : <FormattedMessage {...messages.hideComments} />}
                </button>
            </div>
        </CardBody>
    );
}
