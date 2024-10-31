import { useParams } from "react-router-dom";
import styles from './styles/DeleteComment.module.css'
import { useAppDispatch } from "@/shared/lib";
import { commentsActions, deleteComment } from "@/entities/comment";
import { useCommentContext } from "@/shared/ui/comment";
import { useEffect } from "react";
import { io } from "socket.io-client";
const socket = io(import.meta.env.VITE_SERVER_URL);

export const DeleteComment = () => {
    const dispatch = useAppDispatch();
    const post_id = useParams().postid;
    const context = useCommentContext();

    const handleClick = async () => {
        const comment: PostComment = {
            id: context.comment.id,
            text: context.comment.text,
            post_id,
        }
        await dispatch(deleteComment(comment));
        context.update.setState(false);
    }

    useEffect(() => {
        socket.on('deleteComment', (totalComments) => {
            console.log("Received deleteComment:", totalComments);
            dispatch(commentsActions.updateTotalComments(totalComments));
        });

        return () => {
            socket.off('addComment');
        };
    }, [dispatch]);

    return (
        <div className={styles.delete} onClick={handleClick}>
            Удалить
        </div>
    )
}