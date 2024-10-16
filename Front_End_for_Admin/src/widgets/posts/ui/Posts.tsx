import styles from './styles/Posts.module.css'
import { CreatePost } from "@/features/createPost"
import { NotificationDestributor } from "@/features/notificationDestributor/ui/NotificationDestributor"
import { PaginationShowcaseOfUserPosts } from "../components/canvasOfPosts/ui/PaginationShowcaseOfUserPosts"
import { useSelector } from 'react-redux'
import { selectOpenedPost } from '@/entities/postState/model/slice/openedPost/selectors'
import { SpinnerLoader } from '@/shared/ui/spinnerLoader'

export const Posts = () => {
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