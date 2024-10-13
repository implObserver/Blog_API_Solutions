import { AppDispath } from "@/app/model/store/Store";
import { deleteComment } from "@/entities/comment/model/slice/comments/thunks/delete/deleteComment";
import { useCommentContext } from "@/shared/ui/comment/lib/context/Context";
import { useCommentAreaContext } from "@/shared/ui/commentArea/lib/context/Context";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styles from './styles/UpdateComment.module.css'
import { putComment } from "@/entities/comment/model/slice/comments/thunks/put/putComment";

export const UpdateComment = () => {
    const dispatch = useDispatch<AppDispath>();
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
        console.log(context.text.getState())
        console.log(context.comment.text)
    }

    return (
        <button className={styles.button} onClick={handleClick}>
            Save
        </button>
    )
}