import { selectUserServices } from '@/entities/user';
import styles from './styles/Post.module.css'
import { Canvas } from '@/widgets/canvas'
import { CategoryDate } from '@/widgets/title'
import { useSelector } from 'react-redux';
import { SpinnerLoader } from '@/shared/ui/spinnerLoader';

export const PostPage = () => {
    return (
        <div className={styles.page__main}>
            <CategoryDate></CategoryDate>
            <Canvas></Canvas>
        </div>
    )
}