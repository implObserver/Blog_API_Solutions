import { useEffect, useRef } from 'react';
import styles from './styles/Strong.module.css'
import { useListAreaContext } from '../../../lib/context/Context';

export const Strong = () => {
    const context = useListAreaContext()
    const strong = context.value.strong;
    const inputRef = useRef<HTMLInputElement | null>(null);
    
    useEffect(() => {
        adjustWidth();
    }, [strong]);

    const adjustWidth = () => {
        if (inputRef.current) {
            inputRef.current.style.width = 'auto';
            inputRef.current.style.width = `${inputRef.current.scrollWidth + 2}px`;
        }
    };

    return (
        <div className={styles.container}>
            <input
                id={`strong_${context.value.id}`}
                ref={inputRef}
                placeholder={context.strongPlaceholder}
                defaultValue={strong}
                className={styles.strong_list}
                maxLength={context.maxLength}>
            </input>
        </div>
    )
}