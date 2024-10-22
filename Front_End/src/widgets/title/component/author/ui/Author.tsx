import { selectUserServices } from "@/entities/user"
import { useSelector } from "react-redux"
import styles from './styles/Author.module.css'
import { useParams } from "react-router-dom";
import { selectPosts } from "@/entities/postState";

export const Author = () => {
    const params = useParams();
    const post_id = parseInt(params.postid);
    const user = useSelector(selectUserServices).user;
    const posts = useSelector(selectPosts).posts;
    const post: Post = posts.find(post => post.id === post_id);
    console.log(post)
    return (
        <div className={styles.container}>
            <span className={styles.creator}>
                Creator:
                <span>{post.user.profile.name}</span>
            </span>
            <span className={styles.author}>
                Author:
                <span>{post.author}</span>
            </span>
        </div>
    )
}