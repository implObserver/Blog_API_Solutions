import { useEffect, useState } from 'react';
import { useCommentAreaContext } from '../lib/context/Context'
import styles from './styles/CommentArea.module.css'

export const CommentArea = () => {
    const context = useCommentAreaContext();
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const element = e.target as HTMLTextAreaElement;
        context.comment.setState(element.value);
    }

    return (
        <div className={styles.container}>
            <textarea
                value={context.comment.getState()}
                className={styles.area_comment}
                name="comment"
                id="comment"
                maxLength={1500}
                placeholder='Enter your comment'
                onChange={handleChange}
            >
            </textarea>
        </div>
    )
}