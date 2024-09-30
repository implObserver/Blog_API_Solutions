import { useEffect, useRef } from 'react';
import styles from './styles/Strong.module.css'
import { useListAreaContext } from '../../../lib/context/Context';

export const Strong = () => {
    const context = useListAreaContext()
    const strong = context.value.getStrong();
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        adjustWidth();
    }, [strong]);

    const strong_grow = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const element = e.target as HTMLTextAreaElement;
        if (e.key === 'ArrowLeft'
            || e.key === 'ArrowRight') {
            e.stopPropagation();
        } else {
            if (e.key !== 'ArrowUp'
                && e.key !== 'ArrowRight') {
                adjustWidth();
                context.value.setStrong(element.value);
            } else {

            }
        }
    };

    const focusHandle = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        const element = e.target as HTMLTextAreaElement;
        element.setSelectionRange(element.value.length, element.value.length);
    };

    const adjustWidth = () => {
        if (inputRef.current) {
            inputRef.current.style.width = 'auto';
            inputRef.current.style.width = `${inputRef.current.scrollWidth + 2}px`;
        }
    };

    return (
        <div className={styles.container}>
            <input
                id={`strong_${context.value.getId()}`}
                ref={inputRef}
                autoFocus={context.isFocus}
                onKeyUp={strong_grow}
                placeholder={context.strongPlaceholder}
                defaultValue={strong}
                className={styles.strong_list}
                maxLength={context.maxLength}>
            </input>
        </div>
    )
}