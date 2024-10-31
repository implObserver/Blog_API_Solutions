import { useParams } from "react-router-dom";
import styles from './styles/SubmitComment.module.css'
import { useAppDispatch } from "@/shared/lib";
import { addComment, commentsActions } from "@/entities/comment";
import { useCommentAreaContext } from "@/shared/ui/commentArea";
import { useEffect } from "react";
import { io } from "socket.io-client";
const socket = io(import.meta.env.VITE_SERVER_URL);

export const SubmitComment = () => {
    const dispatch = useAppDispatch();
    const post_id = useParams().postid;
    const context = useCommentAreaContext();

    const handleClick = async () => {
        const comment: PostComment = {
            text: context.comment.getState(),
            post_id,
        }
        await dispatch(addComment(comment));
        context.comment.setState('')
    }

    useEffect(() => {
        socket.on('addComment', (totalComments) => {
            console.log("Received addComment:", addComment);
            dispatch(commentsActions.updateTotalComments(totalComments));
        });

        return () => {
            socket.off('addComment');
        };
    }, [dispatch]);

    return (
        <div className={styles.submit} onClick={handleClick}>
            Submit
        </div>
    )
}