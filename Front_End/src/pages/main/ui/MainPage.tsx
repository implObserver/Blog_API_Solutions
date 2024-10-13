import { FastAuth } from '@/features/fastAuth/ui/FastAuth'
import styles from './styles/MainPage.module.css'
import { Posts } from '@/widgets/posts'
import { Pposts } from '@/widgets/posts/ui/Posts'
import { useSelector } from 'react-redux'
import { selectPosts } from '@/entities/postState/model/slice/posts/selectors'

export const MainPage = () => {
    const posts = useSelector(selectPosts).posts;
    console.log(posts)
    return (
        <div className={styles.page__main}>
            <Pposts></Pposts>
            <FastAuth></FastAuth>
        </div>
    )
}