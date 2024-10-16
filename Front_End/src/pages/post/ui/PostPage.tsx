import { selectUserServices } from '@/entities/user';
import styles from './styles/Post.module.css'
import { Canvas } from '@/widgets/canvas'
import { useSelector } from 'react-redux';
import { SpinnerLoader } from '@/shared/ui/spinnerLoader';
import { CategoryDate } from '@/widgets/title';
import { PostsSlider } from '@/widgets/postsSlider';
import { Line } from '@/shared/ui/line/ui/Line';
import { Comments } from '@/widgets/comments/ui/Comments';

export const PostPage = () => {
    const services = useSelector(selectUserServices);
    if (services.isAuth) {
        return (
            <div className={styles.page__main}>
                <CategoryDate></CategoryDate>
                <Canvas></Canvas>
                <Line text={'Recent Posts'}></Line>
                <PostsSlider></PostsSlider>
                <Comments></Comments>
            </div>
        )
    } else {
        if (!services.isPending) {
            window.location.href = "http://localhost:5001/";
        } else {

        }
    }
}