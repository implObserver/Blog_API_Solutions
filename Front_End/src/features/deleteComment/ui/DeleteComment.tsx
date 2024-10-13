import { AppDispath } from "@/app/model/store/Store";
import { deleteComment } from "@/entities/comment/model/slice/comments/thunks/delete/deleteComment";
import { useCommentContext } from "@/shared/ui/comment/lib/context/Context";
import { useCommentAreaContext } from "@/shared/ui/commentArea/lib/context/Context";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styles from './styles/DeleteComment.module.css'

export const DeleteComment = () => {
    const dispatch = useDispatch<AppDispath>();
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

    return (
        <div className={styles.delete} onClick={handleClick}>
            Удалить
        </div>
    )
}