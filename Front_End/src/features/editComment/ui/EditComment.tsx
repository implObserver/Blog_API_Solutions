import { useCommentContext } from "@/shared/ui/comment/lib/context/Context";
import styles from './styles/EditComment.module.css'

export const EditComment = () => {
    const context = useCommentContext();

    const handleClick = async () => {
        context.update.setState(true);
    }

    return (
        <div className={styles.edit} onClick={handleClick}>
            Редактировать
        </div>
    )
}