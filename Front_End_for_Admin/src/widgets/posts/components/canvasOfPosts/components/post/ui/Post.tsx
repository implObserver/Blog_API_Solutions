import { PostPreview, PostPreviewContext } from "@/entities/postPreview"
import { DeletePost } from "@/features/deletePost"
import { EditPost } from "@/features/editPost/ui/EditPost";
import { UpdateTitle } from "@/features/updateTitleOfPost/ui/UpdateTitle";
import { useCustomState } from "@/shared/lib"
import styles from './styles/Post.module.css'

export const Post = ({ post }) => {
    const toggle = useCustomState(false);
    const text = useCustomState(post.title);

    const context: PostPreviewContextType = {
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