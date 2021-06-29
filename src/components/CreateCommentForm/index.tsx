import React, { useContext, useState } from "react";
import { useIntl } from "react-intl";
import { CommentContext } from "../../store/contexts/CommentContext";
import { PostComment } from "../../store/types/comment";
import messages from "../PostCard/messages";
import { CreateCommentBody } from "./styled";

interface CreateCommentFormProps {
    postId: number;
}

export default function CreateCommentForm(props: CreateCommentFormProps) {
    const [currentComment, setCurrentComment] = useState(new PostComment(props.postId));
    const { commentActions } = useContext(CommentContext);
    const intl = useIntl();

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCurrentComment({ ...currentComment, [e.target.name]: e.target.value });
    };

    const onSubmit = (e: any) => {
        e.preventDefault();
        commentActions.add(currentComment);
        setCurrentComment(new PostComment(props.postId));
    };

    return (
        <CreateCommentBody onSubmit={onSubmit}>
            <input required name="email" value={currentComment.email} onChange={onChange} className="input" type="email" placeholder={intl.formatMessage(messages.email)} />
            <input minLength={2} name="name" value={currentComment.name} onChange={onChange} className="input input-title " type="text" placeholder={intl.formatMessage(messages.title)} />
            <textarea minLength={2} name="body" value={currentComment.body} onChange={onChange} className="input" rows={5} placeholder={intl.formatMessage(messages.body)} />
            <div className="actions-btns">
                <button type="submit" className="primary">
                    {intl.formatMessage(messages.create)}
                </button>
            </div>
        </CreateCommentBody>
    );
}
