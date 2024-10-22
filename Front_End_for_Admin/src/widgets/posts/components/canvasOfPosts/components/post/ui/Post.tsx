import { PostPreview, PostPreviewContext } from "@/entities/postPreview"
import { DeletePost } from "@/features/deletePost"
import { useCustomState } from "@/shared/lib"
import styles from './styles/Post.module.css'
import { UpdateTitle } from "@/features/updateTitleOfPost";
import { EditPost } from "@/features/editPost";

export const Post = ({ post }) => {
    const toggle = useCustomState(false);
    const text = useCustomState(post.title);

    const context: PostPreviewContext = {
        features: [
            <DeletePost postId={post.id}></DeletePost>,
            <EditPost></EditPost>
        ],
        deleteFeature: <DeletePost postId={post.id}></DeletePost>,
        toggle,
        text,
    }
    return (
        <div>
            <PostPreviewContext.Provider value={context}>
                {toggle.getState()
                    ? <div className={styles.updater}>
                        <UpdateTitle postid={post.id} />
                    </div>
                    : <></>
                }
                <div className={toggle.getState()
                    ? styles.blocked
                    : ''}>
                    <PostPreview post={post}></PostPreview>
                </div>

            </PostPreviewContext.Provider>
        </div>
    )
}