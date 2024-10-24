import { useEffect, useRef } from 'react';
import styles from './styles/Strong.module.css'
import { useListAreaContext } from '../../../lib/context/Context';
import TextareaAutosize from 'react-textarea-autosize';

export const Strong = () => {
    const context = useListAreaContext()
    const strong = context.value.getStrongText();
    const inputRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
        adjustSize();
    }, [strong]);

    const strong_grow = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        const element = e.target as HTMLTextAreaElement;
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            e.stopPropagation();
        } else if (e.key !== 'ArrowUp') {
            adjustSize();
            context.value.setStrongText(element.value);
        }
    };

    const adjustSize = () => {
        if (inputRef.current) {
            inputRef.current.style.width = 'auto';
            inputRef.current.style.width = `${inputRef.current.scrollWidth + 2}px`;
        }
    };

    return (
        <div className={styles.container}>
            <TextareaAutosize
                id={`strong_${context.value.getId()}`}
                ref={inputRef}
                autoFocus={context.isFocused}
                onKeyUp={strong_grow}
                placeholder={context.strongPlaceholder}
                defaultValue={strong}
                className={styles.strong_list}
                maxLength={context.maxLength}>
            </TextareaAutosize>
        </div>
    )
}