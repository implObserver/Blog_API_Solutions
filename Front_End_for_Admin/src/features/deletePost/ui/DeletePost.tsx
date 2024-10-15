import { useDispatch } from 'react-redux';
import styles from './styles/DelepePost.module.css'
import { AppDispath } from '@/app/model/store/Store';
import { deletePost } from '@/entities/postState/model/slice/posts/thunks/delete/deletePost';

export const DeletePost = ({ postId }) => {
    const dispatch = useDispatch<AppDispath>();

    const clickHandle = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (confirm('Are you sure delete this post?')) {
            dispatch(deletePost(postId));
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