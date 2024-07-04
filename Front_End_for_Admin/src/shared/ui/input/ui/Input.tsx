import styles from './styles/Input.module.css'
import TextareaAutosize from 'react-textarea-autosize';

function auto_grow(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
    }
}

export const Input = () => {
    return (
        <TextareaAutosize
            onKeyDown={auto_grow}
            placeholder='Enter name of this post'
            className={styles.input}
            wrap='hard'
            maxLength={100} />
    )
}