import styles from './styles/Posts.module.css'
import { CreatePost } from "@/features/createPost"
import { NotificationDistributor } from '@/features/notificationDistributor'
import { PaginationShowcaseOfUserPosts } from '../components/canvasOfPosts'
import { getPostsResponseIds } from '@/entities/postState'
import { useMemo } from 'react'

export const Posts = () => {
    const ids = useMemo(() => getPostsResponseIds(), []);
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.text}>Your posts:</span>
                <div>
                    <CreatePost></CreatePost>
                    <NotificationDistributor ids={ids} />
                </div>
            </div>
            <PaginationShowcaseOfUserPosts></PaginationShowcaseOfUserPosts>
        </div>
    )
}