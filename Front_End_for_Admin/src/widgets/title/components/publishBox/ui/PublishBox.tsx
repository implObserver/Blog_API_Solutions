import { CheckBox } from "@/shared/ui/checkBox/ui/CheckBox"
import styles from './styles/PublishBox.module.css'
import { PublishPost } from "@/features/publishPost/ui/PublishPost"
import { useSelector } from "react-redux";
import { CheckBoxContext } from "@/shared/ui/checkBox/lib/context/Context";
import { selectOpenedPost } from "@/entities/postState/model/slice/openedPost/selectors";

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
                <span>Опубликовать</span>
                <PublishPost>
                    <CheckBoxContext.Provider value={isPublished}>
                        <CheckBox></CheckBox>
                    </CheckBoxContext.Provider>
                </PublishPost>
            </div>
        </div>
    )
}