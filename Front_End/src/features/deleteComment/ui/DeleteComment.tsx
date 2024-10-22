import { useParams } from "react-router-dom";
import styles from './styles/DeleteComment.module.css'
import { useAppDispatch } from "@/shared/lib";
import { deleteComment } from "@/entities/comment";
import { useCommentContext } from "@/shared/ui/comment";

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

    return (
        <div className={styles.delete} onClick={handleClick}>
            Удалить
        </div>
    )
}