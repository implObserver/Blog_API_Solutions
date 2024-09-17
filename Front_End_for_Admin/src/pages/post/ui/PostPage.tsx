import { selectUserServices } from '@/entities/user';
import styles from './styles/Post.module.css'
import { Canvas } from '@/widgets/canvas'
import { CategoryDate } from '@/widgets/title'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getScrollPosition } from '@/widgets/canvas/lib/helper/getScrollPosition';
import { AppDispath } from '@/app/model/store/Store';
import { ScrollRestoration } from 'react-router-dom';

export const PostPage = () => {
    const services = useSelector(selectUserServices);
    const dispatch = useDispatch<AppDispath>();

    useEffect(() => {
        const scrollPosition = getScrollPosition();
       
    }, []);

    if (services.isAuth) {
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