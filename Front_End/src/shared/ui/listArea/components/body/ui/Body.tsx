import styles from './styles/Body.module.css'
import TextareaAutosize from 'react-textarea-autosize';
import { useListAreaContext } from '../../../lib/context/Context';

export const Body = () => {
    const context = useListAreaContext();
    const value = context.value.value;

    return (
        <div className={styles.container}>
            <div
                id={`body_${context.value.id}`}
                className={styles.area_list}>
                {value}
            </div>
        </div>
    )
}