import styles from './styles/Body.module.css'
import TextareaAutosize from 'react-textarea-autosize';
import { useListAreaContext } from '../../../lib/context/Context';

export const Body = () => {
    const context = useListAreaContext();
    const value = context.value.getValue();

    const auto_grow = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        const element = e.target as HTMLTextAreaElement;
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            e.stopPropagation();
        } else if (e.key !== 'ArrowUp') {
            context.value.setValue(element.value);
        }
    };

    const focusHandle = (e: React.FocusEvent<HTMLTextAreaElement>) => {
        const element = e.target as HTMLTextAreaElement;
        element.setSelectionRange(element.value.length, element.value.length);
    };

    return (
        <div className={styles.container}>
            <TextareaAutosize
                id={`body_${context.value.getId()}`}
                autoFocus={context.isFocused}
                onKeyUp={auto_grow}
                placeholder={context.placeholder}
                defaultValue={value}
                className={styles.area_list}
                wrap='hard'
                maxLength={-1}
                onFocus={focusHandle}>
            </TextareaAutosize>
        </div>
    )
}