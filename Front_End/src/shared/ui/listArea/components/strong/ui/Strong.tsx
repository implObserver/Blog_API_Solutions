import { useEffect, useRef } from 'react';
import styles from './styles/Strong.module.css'
import { useListAreaContext } from '../../../lib/context/Context';

export const Strong = () => {
    const context = useListAreaContext()
    const strong = context.value.strong;
    const inputRef = useRef<HTMLInputElement | null>(null);



    return (
        <div className={styles.container}>
            <div
                id={`strong_${context.value.id}`}
                className={strong ? styles.strong_list : ''}>
                {strong}
            </div>
        </div>
    )
}