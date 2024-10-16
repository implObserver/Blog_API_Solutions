import React from 'react';
import { useTextAreaContext } from '../lib/context/Context';
import styles from './styles/Input.module.css'
import TextareaAutosize from 'react-textarea-autosize';

export const TextArea = React.memo(() => {
    const context = useTextAreaContext();
    const value = context.value.getValue();

    const auto_grow = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        const element = e.target as HTMLTextAreaElement;
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            e.stopPropagation();
        } else if (e.key !== 'ArrowUp') {
            context.value.setValue(element.value);
        }
    };

    const focusHandle = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        const element = e.target as HTMLTextAreaElement;
        element.setSelectionRange(element.value.length, element.value.length);
    };

    return (
        <div className={styles.container} key={Math.random()}>
            <TextareaAutosize
                id={context.value.getId().toString()}
                autoFocus={context.isFocus}
                onKeyUp={auto_grow}
                placeholder={context.placeholder}
                defaultValue={value}
                className={styles.area_text}
                wrap='hard'
                maxLength={context.maxLength}
                onFocus={focusHandle}>
            </TextareaAutosize>
        </div>
    )
})