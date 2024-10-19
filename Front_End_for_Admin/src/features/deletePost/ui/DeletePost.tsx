import { useDispatch, useSelector } from 'react-redux';
import styles from './styles/DelepePost.module.css'
import { AppDispath } from '@/app/model/store/Store';
import { deletePost } from '@/entities/postState/model/slice/posts/thunks/delete/deletePost';
import { selectOpenedPost } from '@/entities/postState/model/slice/openedPost/selectors';
import { openedPostActions } from '@/entities/postState/model/slice/openedPost/slice';
import { virtualPostActions } from '@/entities/element';

export const DeletePost = ({ postId }) => {
    const dispatch = useDispatch<AppDispath>();
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