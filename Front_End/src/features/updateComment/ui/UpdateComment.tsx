import { useParams } from "react-router-dom";
import styles from './styles/UpdateComment.module.css'
import { useAppDispatch } from "@/shared/lib";
import { useCommentContext } from "@/shared/ui/comment";
import { commentsActions, putComment } from "@/entities/comment";
import { useEffect } from "react";
import { io } from "socket.io-client";
const socket = io(import.meta.env.VITE_SERVER_URL);

export const UpdateComment = () => {
    const dispatch = useAppDispatch();
    const post_id = useParams().postid;
    const context = useCommentContext();

    const handleClick = async () => {
        const comment: PostComment = {
            text: context.text.getState(),
            post_id,
            id: context.comment.id,
        }
        await dispatch(putComment(comment));
        context.update.setState(false);
    }

    useEffect(() => {
        socket.on('updateComment', (updatedComments) => {
            dispatch(commentsActions.updateComment(updatedComments));
        });

        return () => {
            socket.off('updateComment');
        };
    }, [dispatch]);

    return (
        <button className={styles.button} onClick={handleClick}>
            Save
        </button>
    )
}