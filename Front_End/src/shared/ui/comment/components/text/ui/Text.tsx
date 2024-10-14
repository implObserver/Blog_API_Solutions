import { useState } from "react";
import { useCommentContext } from "../../../lib/context/Context";
import styles from './styles/Text.module.css'
import TextareaAutosize from 'react-textarea-autosize';

export const Text = () => {
    const context = useCommentContext();
    const comment = context.comment;

    const cnahgeHandle = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        const element = e.target as HTMLTextAreaElement;
        context.text.setState(element.value);
    }

    const handleClickOfCancel = () => {
        context.update.setState(false);
    }

    if (context.update.getState()) {
        return (
            <div className={styles.container}>
                <TextareaAutosize
                    id={`${comment.id}_edit`}
                    onKeyUp={cnahgeHandle}
                    defaultValue={comment.text}
                    className={styles.area_text}
                    maxLength={1500}>
                </TextareaAutosize>
                <div className={styles.buttons}>
                    {context.deepFeatures[0]}
                    <button onClick={handleClickOfCancel} className={styles.button}> Cancel </button>
                </div>
            </div>
        )
    } else {
        return (
            <div className={styles.container}>
                <span>{comment.text}</span>
            </div>
        )
    }
}