import { useTextAreaContext } from '../lib/context/Context';
import styles from './styles/Input.module.css'
import TextareaAutosize from 'react-textarea-autosize';

export const TextArea = () => {
    const context = useTextAreaContext();
    const value = context.value.value;

    return (
        <div className={styles.container} key={Math.random()}>
            <div
                id={`${context.value.id}`}
                className={styles.area_text}>
                {value}
            </div>
        </div>
    )
}