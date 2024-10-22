import { useParams } from "react-router-dom";
import styles from './styles/UpdateComment.module.css'
import { useAppDispatch } from "@/shared/lib";
import { useCommentContext } from "@/shared/ui/comment";
import { putComment } from "@/entities/comment";

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

    return (
        <button className={styles.button} onClick={handleClick}>
            Save
        </button>
    )
}