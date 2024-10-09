import { selectUserServices } from '@/entities/user';
import styles from './styles/Post.module.css'
import { Canvas } from '@/widgets/canvas'
import { useSelector } from 'react-redux';
import { SpinnerLoader } from '@/shared/ui/spinnerLoader';
import { CategoryDate } from '@/widgets/title';
import { PostsSlider } from '@/widgets/postsSlider';
import { Recent } from '@/shared/ui/recent/ui/Recent';

export const PostPage = () => {
    const services = useSelector(selectUserServices);

    if (services.isAuth) {
        return (
            <div className={styles.page__main}>
                <CategoryDate></CategoryDate>
                <Canvas></Canvas>
                <Recent></Recent>
                <PostsSlider></PostsSlider>
            </div>
        )
    } else {
        if (!services.isPending) {
            window.location.href = "http://localhost:5000/";
        } else {

        }
    }
}