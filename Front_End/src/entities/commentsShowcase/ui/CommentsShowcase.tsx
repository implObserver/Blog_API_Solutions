import { Comment } from "@/shared/ui/comment/ui/Comment";
import { useCommentsShowcaseContext } from "../lib/context/Context";
import { CommentContext } from "@/shared/ui/comment/lib/context/Context";
import styles from './styles/CommentsShowcase.module.css'

export const CommentsShowcase = () => {
    const post = useCommentsShowcaseContext();
    if (post.comments) {
        const comments = post.comments;
        const reversedComments = [...comments].reverse();

        const fill = () => {
            return reversedComments.map(comment => {
                const context: CommentContextType = {
                    comment,
                }
                return (
                    <div key={comment.id}>
                        <CommentContext.Provider value={context}>
                            <Comment></Comment>
                        </CommentContext.Provider>
                    </div>
                )
            })
        }

        return (
            <div className={styles.container}>
                {fill()}
            </div>
        )
    } else {
        return (
            <div>

            </div>
        )
    }
}