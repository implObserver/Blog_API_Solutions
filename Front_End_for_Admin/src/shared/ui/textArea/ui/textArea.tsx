import { useTextAreaContext } from '../lib/context/Context';
import styles from './styles/Input.module.css'
import TextareaAutosize from 'react-textarea-autosize';

export const TextArea = ({ text, maxLength }) => {
    const context = useTextAreaContext();
    console.log(context)
    function auto_grow(e: React.ChangeEvent<HTMLTextAreaElement>) {
        const element = e.target as HTMLTextAreaElement;
        console.log(element.value)
        context.setValue(element.value);
    }

    return (
        <TextareaAutosize
            autoFocus
            onChange={auto_grow}
            placeholder={context.placeholder}
            defaultValue={context.value}
            className={styles.area_text}
            wrap='hard'
            maxLength={context.maxLength}>
        </TextareaAutosize>
    )
}