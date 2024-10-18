import { useDispatch, useSelector } from 'react-redux'
import styles from './styles/AddComment.module.css'
import { AppDispath } from '@/app/model/store/Store';
import { selectUserServices, servicesActions } from '@/entities/user';
import { addComment } from '@/entities/comment/model/slice/comments/thunks/post/addComment';
import { useParams } from 'react-router-dom';
import { getAllPosts } from '@/entities/postState/model/slice/posts/thunks/get/getAllPosts';
import { CommentArea } from '@/shared/ui/commentArea/ui/CommentArea';
import { SubmitComment } from '../components/submit/ui/SubmitComment';
import { useState } from 'react';
import { CommentAreaContext } from '@/shared/ui/commentArea/lib/context/Context';
import { useCustomState } from '@/shared/lib';
import { spawn } from 'child_process';

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