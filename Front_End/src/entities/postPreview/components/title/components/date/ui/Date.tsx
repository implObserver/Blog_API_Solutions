import { usePostPreviewContext } from "@/entities/postPreview/lib";
import { getFormattedDate } from "@/shared/lib";
import styles from './styles/Date.module.css'

export const PostingDate = () => {
    const context = usePostPreviewContext();
    const postingDate = new Date(context.post.postingDate);

    const formattedDate = getFormattedDate(postingDate);
    return (
        <div className={styles.date}>
            {formattedDate}
        </div>
    )
}