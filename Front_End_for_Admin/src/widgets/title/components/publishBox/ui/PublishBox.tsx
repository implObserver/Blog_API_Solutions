import { CheckBox } from "@/shared/ui/checkBox/ui/CheckBox"
import styles from './styles/PublishBox.module.css'
import { PublishPost } from "@/features/publishPost/ui/PublishPost"
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserServices } from "@/entities/user";
import { CheckBoxContext } from "@/shared/ui/checkBox/lib/context/Context";

export const PublishBox = () => {
    const params = useParams();
    const post_id = parseInt(params.postid);
    const service = useSelector(selectUserServices);
    const user = service.user;
    const posts = user.posts;
    const post = posts.find(post => post.id === post_id);
    const isPublished = post.isPublished;
    console.log(post)
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