import { useSelector } from 'react-redux';
import styles from './styles/DelepePost.module.css'
import {
    deletePost,
    openedPostActions,
    selectOpenedPost,
    virtualPostActions
} from '@/entities/postState';
import { useAppDispatch } from '@/shared/lib';

export const DeletePost = ({ postId }) => {
    const dispatch = useAppDispatch();
    const openedPost = useSelector(selectOpenedPost).openedPost;
    const clickHandle = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (confirm('Are you sure delete this post?')) {
            dispatch(deletePost(postId));
            if (openedPost.id === postId) {
                dispatch(openedPostActions.setOpenedPost(null))
                dispatch(virtualPostActions.setPost(null))
            }
            console.log('Post was deleted');
        } else {
            console.log('Post was not deleted');
        }
    }

    return (
        <div onClick={clickHandle} className={styles.delete}>
            Удалить
        </div>
    )
}