import styles from './styles/EditPost.module.css'
import { usePostPreviewContext } from "@/entities/postPreview";

export const EditPost = () => {
    const context = usePostPreviewContext();

    const handleClick = async () => {
        context.toggle.setState(true);
    }

    return (
        <div className={styles.edit} onClick={handleClick}>
            Редактировать
        </div>
    )
}