import styles from './styles/Input.module.css'
import TextareaAutosize from 'react-textarea-autosize';

function auto_grow(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter') {
        e.preventDefault();
    }
}

export const TextArea = ({ text, maxLength }) => {
    return (
        <TextareaAutosize
            onKeyDown={auto_grow}
            placeholder={text}
            className={styles.area_text}
            wrap='hard'
            maxLength={maxLength} />
    )
}