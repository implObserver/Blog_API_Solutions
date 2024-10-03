import styles from './styles/Body.module.css'
import TextareaAutosize from 'react-textarea-autosize';
import { useListAreaContext } from '../../../lib/context/Context';

export const Body = () => {
    const context = useListAreaContext();
    const value = context.value.value;

    return (
        <div className={styles.container}>
            <TextareaAutosize
                id={`body_${context.value.id}`}
                placeholder={context.placeholder}
                defaultValue={value}
                className={styles.area_list}
                wrap='hard'
                maxLength={context.maxLength}
            >
            </TextareaAutosize>
        </div>
    )
}