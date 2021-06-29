import React from "react";
import { FormattedMessage } from "react-intl";
import { IComment } from "../../store/types/comment";
import messages from "../PostCard/messages";
import { CardBody } from "./styled";

interface PostCardProps {
    comment: IComment;
}

export default function CommentCard({ comment }: PostCardProps) {
    return (
        <CardBody>
            <h3 className="title">{comment.name}</h3>
            <p className="body">{comment.body}</p>
            <span>
                <FormattedMessage {...messages.postBy} />: {comment.email}
            </span>
        </CardBody>
    );
}
