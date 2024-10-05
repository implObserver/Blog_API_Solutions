import { TextArea, TextAreaContext } from "@/shared/ui/textArea";
import styles from './styles/Title.module.css';
import { useElementContext } from "@/entities/element";

export const Title = () => {
    const context = useElementContext();
    const type = context.model.type;
    const fontSize = context.model.fontSize;
    const h = fontSize === 1
        ? styles.h1
        : fontSize === 2
            ? styles.h2
            : styles.h3;

    const className = type === 'main_title'
        ? `${styles.main_title} ${context.model.fontSize}`
        : styles.title;

    const getTitleTextArea = (placeholder: string) => {
        const titleContext: TextAreaContextType = {
            placeholder,
            value: context.model,
            maxLength: 100,
        }
        return (
            <div className={className}>
                <TextAreaContext.Provider value={titleContext}>
                    <TextArea></TextArea>
                </TextAreaContext.Provider>
            </div>
        )
    }

    return (
        <div className={h}>
            {getTitleTextArea('Empty title')}
        </div>
    )
}