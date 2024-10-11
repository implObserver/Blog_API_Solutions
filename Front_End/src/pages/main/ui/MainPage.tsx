import { FastAuth } from '@/features/fastAuth/ui/FastAuth'
import styles from './styles/MainPage.module.css'
import { Posts } from '@/widgets/posts'
import { PostsAlternate } from '@/widgets/postsAlternate/ui/PostsAlternate'
import { Pposts } from '@/widgets/posts/ui/Pposts'
import { useSelector } from 'react-redux'
import { selectPosts } from '@/entities/postState/model/slice/posts/selectors'

export const MainPage = () => {
    const posts = useSelector(selectPosts).posts;
    console.log(posts)
    return (
        <div className={styles.page__main}>
            <PostsAlternate></PostsAlternate>
            <Pposts></Pposts>
            <FastAuth></FastAuth>
        </div>
    )
}