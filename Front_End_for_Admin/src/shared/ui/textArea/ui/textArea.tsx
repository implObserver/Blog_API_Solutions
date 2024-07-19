import { useCustomState } from '@/shared/lib/hooks/useCustomState';
import { useTextAreaContext } from '../lib/context/Context';
import styles from './styles/Input.module.css'
import TextareaAutosize from 'react-textarea-autosize';
import { useEffect, useState } from 'react';

export const TextArea = () => {
    const context = useTextAreaContext();
    let value = context.value.getValue();
    console.log(`area:${context.value.getValue()}`)
    function auto_grow(e: React.KeyboardEvent<HTMLTextAreaElement>) {
        const element = e.target as HTMLTextAreaElement;
        console.log(element.value)
        context.value.setValue(element.value);
    }

    return (
        <div key={Math.random()}>
            <TextareaAutosize
                autoFocus
                onKeyUp={auto_grow}
                placeholder={context.placeholder}
                defaultValue={value}
                className={styles.area_text}
                wrap='hard'
                maxLength={context.maxLength}>
            </TextareaAutosize>
        </div>
    )
}