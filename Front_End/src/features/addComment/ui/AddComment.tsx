import { useSelector } from 'react-redux'
import styles from './styles/AddComment.module.css'
import { selectUserServices } from '@/entities/user';
import { useCustomState } from '@/shared/lib';
import { CommentArea, CommentAreaContext } from '@/shared/ui/commentArea';
import { SubmitComment } from '../components/submit';

export const AddComment = () => {
    const comment = useCustomState('');
    const user = useSelector(selectUserServices).user;
    
    const commentContext: CommentAreaContextType = {
        comment,
    }

    return (
        <div className={styles.container}>
            <CommentAreaContext.Provider value={commentContext}>
                <div className={user ? styles.container : styles.blocked}>
                    <CommentArea></CommentArea>
                    <SubmitComment></SubmitComment>
                </div>
                {user
                    ? ''
                    : <span className={styles.span}>Авторизуйтесь, чтобы оставлять комментарии</span>}
            </CommentAreaContext.Provider>
        </div>
    )
}