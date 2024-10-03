import { useTextAreaContext } from '../lib/context/Context';
import styles from './styles/Input.module.css'
import TextareaAutosize from 'react-textarea-autosize';

export const TextArea = () => {
    const context = useTextAreaContext();
    const value = context.value.value;

    return (
        <div className={styles.container} key={Math.random()}>
            <TextareaAutosize
                id={`${context.value.id}`}
                placeholder={context.placeholder}
                defaultValue={value}
                className={styles.area_text}
                wrap='hard'
                maxLength={context.maxLength}
            >
            </TextareaAutosize>
        </div>
    )
}