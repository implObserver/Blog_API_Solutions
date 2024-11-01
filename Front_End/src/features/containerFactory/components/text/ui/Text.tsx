import { useElementContext } from "@/entities/element";
import { TextArea, TextAreaContext } from "@/shared/ui/textArea"
import styles from './styles/Text.module.css'

export const Text = () => {
    const context = useElementContext();

    const textAreaContext: TextAreaContextType = {
        placeholder: 'Add text',
        value: context.model,
        maxLength: -1,
    }

    return (
        <div className={styles.text}>
            <TextAreaContext.Provider value={textAreaContext}>
                <TextArea></TextArea>
            </TextAreaContext.Provider>
        </div>
    )
}