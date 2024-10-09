import { usePostPreviewContext } from "@/entities/postPreview/lib/context/Context";
import styles from './styles/Text.module.css'
import { Link } from "react-router-dom";
import { useAlterPostPreviewContext } from "@/entities/alterPostPreview/lib/context/Context";

export const Text = () => {
    const context = useAlterPostPreviewContext();
    const post = context.post;
    return (
        <Link
            key={`container_${post.id}`}
            className={styles.link}
            to={`/post/${post.id}`}
            state={post.id}
        >
            <div className={styles.title}>
                {context.post.elements[0].value}
            </div>
        </Link>
    )
}