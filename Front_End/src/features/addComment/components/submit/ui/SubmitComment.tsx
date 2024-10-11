import { AppDispath } from "@/app/model/store/Store";
import { getPaginationPosts } from "@/entities/postState/model/slice/posts/thunks/get/getPaginationPost";
import { getPostToId } from "@/entities/postState/model/slice/posts/thunks/get/getPostToId";
import { addComment } from "@/entities/commentsShowcase/model/slice/comments/thunks/post/addComment";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styles from './styles/SubmitComment.module.css'
import { useCommentAreaContext } from "@/shared/ui/commentArea/lib/context/Context";

export const SubmitComment = () => {
    const dispatch = useDispatch<AppDispath>();
    const post_id = useParams().postid;
    const context = useCommentAreaContext();
    console.log('wtf')
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