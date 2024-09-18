import { useDispatch } from 'react-redux';
import styles from './styles/DelepePost.module.css'
import { AppDispath } from '@/app/model/store/Store';
import { deletePost } from '@/entities/user/model/slice/services/thunks/delete/deletePost';

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
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="100%"
                viewBox="0 -960 960 960"
                width="100%"
                fill="#ff0000">
                <path
                    d="m376-300 104-104 104 104 56-56-104-104 
                104-104-56-56-104 104-104-104-56 56 104 
                104-104 104 56 56Zm-96 180q-33 
                0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 
                33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 
                0v520-520Z"/>
            </svg>
        </div>
    )
}