import { selectOpenedPost } from '@/entities/postState';
import styles from './styles/PublishBox.module.css'
import { useSelector } from "react-redux";
import { PublishPost } from '@/features/publishPost';
import { CheckBox, CheckBoxContext } from '@/shared/ui/checkBox';


export const PublishBox = () => {
    const post = useSelector(selectOpenedPost).openedPost;

    const isPublished = post.isPublished;
    return (
        <div>
            <div className={styles.box}>
                <span className={styles.status}>
                    {isPublished
                        ? '(опубликовано)'
                        : ''}</span>
                <span className={styles.publish}>Опубликовать</span>
                <PublishPost>
                    <CheckBoxContext.Provider value={isPublished}>
                        <CheckBox></CheckBox>
                    </CheckBoxContext.Provider>
                </PublishPost>
            </div>
        </div>
    )
}