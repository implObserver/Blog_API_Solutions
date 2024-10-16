import { CheckBox } from "@/shared/ui/checkBox/ui/CheckBox"
import styles from './styles/PublishBox.module.css'
import { PublishPost } from "@/features/publishPost/ui/PublishPost"
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserServices } from "@/entities/user";
import { CheckBoxContext } from "@/shared/ui/checkBox/lib/context/Context";
import { selectPosts } from "@/entities/postState/model/slice/posts/selectors";

export const PublishBox = () => {
    const params = useParams();
    const post_id = parseInt(params.postid);
    const postsService = useSelector(selectPosts);
    const posts = postsService.posts;

    const post = posts.find(post => post.id === post_id);
    if (!post) {
        return (
            <div>Нет доступа или пост не существует</div>
        )
    }

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