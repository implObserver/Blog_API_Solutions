import { FastAuth } from '@/features/fastAuth/ui/FastAuth'
import styles from './styles/MainPage.module.css'
import { Posts } from '@/widgets/posts'
import { PostsAlternate } from '@/widgets/postsAlternate/ui/PostsAlternate'

export const MainPage = () => {
    return (
        <div className={styles.page__main}>
            <PostsAlternate></PostsAlternate>
            <Posts></Posts>
            <FastAuth></FastAuth>
        </div>
    )
}