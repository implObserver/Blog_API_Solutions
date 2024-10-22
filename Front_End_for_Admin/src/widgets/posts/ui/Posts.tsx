import styles from './styles/Posts.module.css'
import { CreatePost } from "@/features/createPost"
import { NotificationDistributor } from '@/features/notificationDistributor'
import { PaginationShowcaseOfUserPosts } from '../components/canvasOfPosts'

export const Posts = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.text}>Your posts:</span>
                <div>
                    <CreatePost></CreatePost>
                    <NotificationDistributor />
                </div>
            </div>
            <PaginationShowcaseOfUserPosts></PaginationShowcaseOfUserPosts>
        </div>
    )
}