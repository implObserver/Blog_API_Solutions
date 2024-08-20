import styles from './styles/Post.module.css'
import { Canvas } from '@/widgets/canvas'
import { CategoryDate } from '@/widgets/title'

export const PostPage = () => {
    return (
        <div className={styles.page__main}>
            <CategoryDate></CategoryDate>
            <Canvas></Canvas>
        </div>
    )
}