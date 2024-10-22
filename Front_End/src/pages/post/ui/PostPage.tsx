import styles from './styles/Post.module.css'
import { Canvas } from '@/widgets/canvas'
import { CategoryDate } from '@/widgets/title';
import { PostsSlider } from '@/widgets/postsSlider';
import { Line } from '@/shared/ui/line';
import { Comments } from '@/widgets/comments';

export const PostPage = () => {
    return (
        <div className={styles.page__main}>
            <CategoryDate></CategoryDate>
            <Canvas></Canvas>
            <Line text={'Recent Posts'}></Line>
            <PostsSlider></PostsSlider>
            <Comments></Comments>
        </div>
    )
}