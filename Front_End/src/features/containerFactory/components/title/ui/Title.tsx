import { TextArea, TextAreaContext } from "@/shared/ui/textArea";
import styles from './styles/Title.module.css';
import { useElementContext } from "@/entities/element";

export const Title = () => {
    const context = useElementContext();
    const type = context.model.type;
    const className = type === 'main_title'
        ? styles.main_title
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
        <div className={styles.h1}>
            {getTitleTextArea('Empty title')}
        </div>
    )
}