import { useElementContext } from "@/entities/element";
import { TextArea, TextAreaContext } from "@/shared/ui/textArea"
import styles from './styles/ListHeader.module.css'

export const ListHeader = () => {
    const context = useElementContext();

    const textAreaContext: TextAreaContextType = {
        placeholder: 'Add list name',
        value: context.model,
        maxLength: -1,
    }

    return (
        <div className={styles.list_header}>
            <TextAreaContext.Provider value={textAreaContext}>
                <TextArea></TextArea>
            </TextAreaContext.Provider>
        </div>
    )
}