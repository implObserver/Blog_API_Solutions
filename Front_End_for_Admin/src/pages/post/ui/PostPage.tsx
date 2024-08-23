import { selectAuth } from '@/entities/user';
import styles from './styles/Post.module.css'
import { Canvas } from '@/widgets/canvas'
import { CategoryDate } from '@/widgets/title'
import { useSelector } from 'react-redux';

export const PostPage = () => {
    const select = useSelector(selectAuth).states;
    if (select.isAuth) {
        return (
            <div className={styles.page__main}>
                <CategoryDate></CategoryDate>
                <Canvas></Canvas>
            </div>
        )
    } else {
        window.location.href = "http://localhost:5000/";
    }
}