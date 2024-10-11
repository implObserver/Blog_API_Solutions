import { CommentsShowcaseContext } from "@/entities/commentsShowcase/lib/context/Context";
import { CommentsShowcase } from "@/entities/commentsShowcase/ui/CommentsShowcase";
import { selectPosts } from "@/entities/postState/model/slice/posts/selectors";
import { AddComment } from "@/features/addComment/ui/AddComment";
import { CommentArea } from "@/shared/ui/commentArea/ui/CommentArea";
import { Line } from "@/shared/ui/line";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import styles from './styles/Comments.module.css'
import { PaginationCommentsShowcase } from "@/entities/commentsShowcase/ui/PaginationCommentsShowcase";
import { selectComments } from "@/entities/commentsShowcase/model/slice/comments/selectors";

export const Comments = () => {
    const totalComments = useSelector(selectComments).totalComments;

    return (
        <div className={styles.container}>
            <Line text={`${totalComments} Comments`}></Line>
            <div className={styles.creater}>
                <AddComment></AddComment>
            </div>

            <PaginationCommentsShowcase></PaginationCommentsShowcase>
        </div>
    )
}