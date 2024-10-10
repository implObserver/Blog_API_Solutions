import { CommentsShowcaseContext } from "@/entities/commentsShowcase/lib/context/Context";
import { CommentsShowcase } from "@/entities/commentsShowcase/ui/CommentsShowcase";
import { selectPosts } from "@/entities/user/model/slice/posts/selectors";
import { AddComment } from "@/features/addComment/ui/AddComment";
import { CommentArea } from "@/shared/ui/commentArea/ui/CommentArea";
import { Line } from "@/shared/ui/line";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import styles from './styles/Comments.module.css'

export const Comments = () => {
    const params = useParams();
    const post_id = parseInt(params.postid);
    const posts = useSelector(selectPosts).posts;
    const post = posts.find(post => post.id === post_id);
    const comments = post.comments;
    const length = comments ? comments.length : 0;
    console.log(post)
    return (
        <div className={styles.container}>
            <Line text={`${length} Comments`}></Line>
            <div className={styles.creater}>
                <CommentArea></CommentArea>
                <AddComment></AddComment>
            </div>
            <CommentsShowcaseContext.Provider value={post}>
                <CommentsShowcase></CommentsShowcase>
            </CommentsShowcaseContext.Provider>
        </div>
    )
}