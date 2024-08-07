import { useCallback, useEffect } from 'react';
import { useTextAreaContext } from '../lib/context/Context';
import styles from './styles/Input.module.css'
import TextareaAutosize from 'react-textarea-autosize';

export const TextArea = () => {
    const context = useTextAreaContext();
    let value = context.value.getValue();
    const auto_grow = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        const element = e.target as HTMLTextAreaElement;
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            e.stopPropagation();
        } else {
            context.value.setValue(element.value);
        }
    };

    const focusHandle = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        const element = e.target as HTMLTextAreaElement;
        element.setSelectionRange(element.value.length, element.value.length);
    };

    return (
        <div key={Math.random()}>
            <TextareaAutosize
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
}