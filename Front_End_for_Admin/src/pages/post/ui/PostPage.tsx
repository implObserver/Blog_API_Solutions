import { selectUserServices } from '@/entities/user';
import styles from './styles/Post.module.css'
import { Canvas } from '@/widgets/canvas'
import { CategoryDate } from '@/widgets/title'
import { useDispatch, useSelector } from 'react-redux';
import { Canvas2 } from '@/widgets/canvas2/Canvas2';
import { AppDispath } from '@/app/model/store/Store';
import { postsActions } from '@/entities/showcasePosts/model/slice/slice';
import { useEffect } from 'react';

export const PostPage = () => {
    const services = useSelector(selectUserServices);
    const user = services.user;
    const dispatch = useDispatch<AppDispath>();
    useEffect(() => {
        dispatch(postsActions.uploadPosts(user.posts))
    }, [user])

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