import { useDispatch } from 'react-redux'
import styles from './styles/AddComment.module.css'
import { AppDispath } from '@/app/model/store/Store';
import { servicesActions } from '@/entities/user';
import { addComment } from '@/entities/commentsShowcase/model/slice/comments/thunks/post/addComment';
import { useParams } from 'react-router-dom';
import { getAllPosts } from '@/entities/postState/model/slice/posts/thunks/get/getAllPosts';
import { CommentArea } from '@/shared/ui/commentArea/ui/CommentArea';
import { SubmitComment } from '../components/submit/ui/SubmitComment';
import { useState } from 'react';
import { CommentAreaContext } from '@/shared/ui/commentArea/lib/context/Context';
import { useCustomState } from '@/shared/lib';

export const AddComment = () => {
    const comment = useCustomState('');

    const commentContext: CommentAreaContextType = {
        comment,
    }

    return (
        <div className={styles.container}>
            <CommentAreaContext.Provider value={commentContext}>
                <CommentArea></CommentArea>
                <SubmitComment></SubmitComment>
            </CommentAreaContext.Provider>
        </div>
    )
}