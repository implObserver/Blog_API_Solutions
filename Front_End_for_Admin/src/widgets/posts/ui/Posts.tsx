import { selectUserServices } from "@/entities/user"
import { useSelector } from "react-redux"
import styles from './styles/Posts.module.css'
import { CanvasOfPosts } from "../components/canvasOfPosts"
import { CreatePost } from "@/features/createPost"
import { NotificationDestributor } from "@/features/notificationDestributor/ui/NotificationDestributor"
import { PaginationShowcaseOfUserPosts } from "../components/canvasOfPosts/ui/PaginationShowcaseOfUserPosts"
import { selectPosts } from "@/entities/postState/model/slice/posts/selectors"

export const Posts = () => {
    const postsService = useSelector(selectPosts);
    const posts = postsService.posts;

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.text}>Your posts:</span>
                <div>
                    <CreatePost></CreatePost>
                    <NotificationDestributor />
                </div>
            </div>
            <PaginationShowcaseOfUserPosts></PaginationShowcaseOfUserPosts>
        </div>
    )
}