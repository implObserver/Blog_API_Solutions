import { useDispatch } from 'react-redux'
import styles from './styles/AddComment.module.css'
import { AppDispath } from '@/app/model/store/Store';
import { servicesActions } from '@/entities/user';
import { addComment } from '@/entities/user/model/slice/services/thunks/update/addComment';
import { useParams } from 'react-router-dom';
import { getAllPosts } from '@/entities/user/model/slice/posts/thunks/get/getAllPosts';

export const AddComment = () => {
    const dispatch = useDispatch<AppDispath>();
    const post_id = useParams().postid;

    const handleClick = async () => {
        const comment: PostComment = {
            text: 'My First Comment',
            post_id,
        }
        console.log(comment)
        await dispatch(addComment(comment));
        await dispatch(getAllPosts());
    }

    return (
        <div className={styles.submit} onClick={handleClick}>
            Submit
        </div>
    )
}