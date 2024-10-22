import { useCommentContext } from "../lib/context/Context"
import { timeAgo } from "@/shared/lib/helpers/timeAgo";
import styles from './styles/Comment.module.css'
import { Text } from "../components/text";

export const Comment = () => {
    const context = useCommentContext();
    const comment: PostComment = context.comment;
    const date = new Date(comment.postingDate);
    const formattedDate = timeAgo(date);
    
    return (
        <div className={styles.comment}>
            <div className={styles.comment_header}>
                <span className={styles.container_nickname}>
                    {comment.user.username}
                </span>
                <span className={styles.container_time_ago}>
                    {formattedDate}
                </span>
                <span className={styles.update}>
                    {comment.isUpdate ? '(изменено)' : ''}
                </span>
            </div>
            <div className={styles.comment_body}>
                <Text></Text>
            </div>
        </div>
    )
}