import { useParams } from "react-router-dom";
import styles from './styles/SubmitComment.module.css'
import { useAppDispatch } from "@/shared/lib";
import { addComment } from "@/entities/comment";
import { useCommentAreaContext } from "@/shared/ui/commentArea";

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

    return (
        <div className={styles.submit} onClick={handleClick}>
            Submit
        </div>
    )
}